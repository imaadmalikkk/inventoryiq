'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ProductsTable } from "@/components/products/products-table";
import { Product, ProductCategory, ProductFilters } from "@/types/product";
import { ChevronDown, Download, Plus, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductForm } from "@/components/products/product-form";

// Mock data for initial development
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Sample Product',
    sku: 'SKU-001',
    category: 'Electronics',
    price: 99.99,
    stock: 50,
    description: 'A sample product description',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more mock products as needed
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<ProductFilters['sortBy']>('name-asc');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category: ProductCategory | 'All') => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSort = (newSortBy: ProductFilters['sortBy']) => {
    setSortBy(newSortBy);
  };

  const handleDelete = async (ids: string[]) => {
    // TODO: Implement API call
    setProducts(products.filter(p => !ids.includes(p.id)));
  };

  const handleExport = () => {
    // TODO: Implement CSV export
    const csv = products.map(p => [
      p.name,
      p.sku,
      p.category,
      p.price.toString(),
      p.stock.toString(),
    ].join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredProducts = products
    .filter(p => 
      (searchQuery === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) &&
      (selectedCategory === 'All' || p.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const itemsPerPage = 20;
  const totalItems = filteredProducts.length;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={handleExport}>
            <Download className="h-4 w-4" />
          </Button>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-8 w-[300px]"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Filter by type <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Product Types</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleCategoryFilter('All')}>
                All Products
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('Fruits')}>
                Fruits
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('Drinks')}>
                Drinks
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('Electronics')}>
                Electronics
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Sort by <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSort('name-asc')}>
              Name (A-Z)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort('name-desc')}>
              Name (Z-A)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort('price-asc')}>
              Price (Low to High)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort('price-desc')}>
              Price (High to Low)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ProductsTable
        products={paginatedProducts}
        total={totalItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onSort={handleSort}
        onDelete={handleDelete}
        onEdit={setEditingProduct}
        onExport={handleExport}
      />

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <ProductForm
            onSubmit={(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
              // TODO: Implement API call
              const newProduct: Product = {
                ...data,
                id: (products.length + 1).toString(),
                createdAt: new Date(),
                updatedAt: new Date(),
              };
              setProducts([...products, newProduct]);
              setIsAddDialogOpen(false);
            }}
            onCancel={() => setIsAddDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={!!editingProduct} onOpenChange={(open) => !open && setEditingProduct(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          {editingProduct && (
            <ProductForm
              initialData={editingProduct}
              onSubmit={(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
                // TODO: Implement API call
                setProducts(products.map(p => 
                  p.id === editingProduct.id 
                    ? { ...p, ...data, updatedAt: new Date() }
                    : p
                ));
                setEditingProduct(null);
              }}
              onCancel={() => setEditingProduct(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 