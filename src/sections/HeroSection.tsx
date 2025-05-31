import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle, TrendingUp, Users, Package2, DollarSign, LineChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const chartData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Left side - Content */}
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Simplify Your Inventory Management
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Streamline your stock control, manage clients, and generate invoices with ease. 
              Perfect for small businesses looking to scale their operations efficiently.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-x-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">1000+</span>
                <span className="text-muted-foreground">Active Users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">99%</span>
                <span className="text-muted-foreground">Satisfaction</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">24/7</span>
                <span className="text-muted-foreground">Support</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Dashboard Preview */}
          <div className="mx-auto lg:mx-0 lg:mt-0 lg:w-full">
            <div className="relative">
              <div className="rounded-xl border bg-background/50 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="p-8">
                  {/* Mini Dashboard */}
                  <div className="space-y-4">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                          <DollarSign className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$45,231.89</div>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 text-primary" />
                            +20.1% from last month
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Products</CardTitle>
                          <Package2 className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+2,350</div>
                          <p className="text-xs text-muted-foreground">Active items in stock</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Chart Preview */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales Overview</CardTitle>
                        <LineChart className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <div className="h-[120px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                              <defs>
                                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <XAxis 
                                dataKey="month" 
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                              />
                              <YAxis 
                                hide={true}
                              />
                              <Area
                                type="monotone"
                                dataKey="sales"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2}
                                fill="url(#salesGradient)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Recent Activity */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                        <Users className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>New order #1234 - $123.45</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Stock updated: +50 units</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 