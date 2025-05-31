import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Package,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  BoxIcon,
  UserPlus,
  FileText,
  FileUp
} from "lucide-react"
import { mockProducts, mockClients, mockTransactions } from "./mock-data"

export default function DashboardPage() {
  // Calculate metrics
  const totalProducts = mockProducts.length
  const totalClients = mockClients.length
  const totalStock = mockProducts.reduce((acc, product) => 
    acc + (product.quantityIn - product.quantityOut), 0)

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              Active products in inventory
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Clients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalClients}</div>
            <p className="text-xs text-muted-foreground">
              Active business clients
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Stock</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStock}</div>
            <p className="text-xs text-muted-foreground">
              Units across all products
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Client</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTransactions.slice(0, 5).map((transaction) => {
                  const product = mockProducts.find(p => p.id === transaction.productId)
                  const client = transaction.clientId 
                    ? mockClients.find(c => c.id === transaction.clientId)
                    : null

                  return (
                    <TableRow key={transaction.id}>
                      <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {transaction.type === 'in' ? (
                            <ArrowUpRight className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowDownRight className="mr-2 h-4 w-4 text-red-500" />
                          )}
                          {transaction.type.toUpperCase()}
                        </div>
                      </TableCell>
                      <TableCell>{product?.name}</TableCell>
                      <TableCell>{transaction.quantity} {product?.unit}</TableCell>
                      <TableCell>{client?.name || '-'}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4 hover:bg-gray-50 transition cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-2 bg-purple-100 rounded-full">
              <BoxIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-medium">Add Stock</h3>
            <p className="text-sm text-muted-foreground text-center">Record new inventory arrival</p>
          </div>
        </Card>

        <Card className="p-4 hover:bg-gray-50 transition cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <UserPlus className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-medium">New Client</h3>
            <p className="text-sm text-muted-foreground text-center">Register a new business client</p>
          </div>
        </Card>

        <Card className="p-4 hover:bg-gray-50 transition cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-2 bg-orange-100 rounded-full">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-medium">Create Invoice</h3>
            <p className="text-sm text-muted-foreground text-center">Generate a new invoice</p>
          </div>
        </Card>

        <Card className="p-4 hover:bg-gray-50 transition cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-2 bg-green-100 rounded-full">
              <FileUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium">Export Data</h3>
            <p className="text-sm text-muted-foreground text-center">Download reports and data</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
