import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Subscriptions() {
  return (
    <div className="container mx-auto py-6 px-4 bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900">Subscriptions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Current Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">You are currently on the Pro Plan</h3>
              <p className="text-sm text-gray-600">Your plan renews on July 1, 2023</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Change Plan</h3>
              <RadioGroup defaultValue="pro" className="space-y-4">
                <div className="flex items-center space-x-2 border rounded-lg p-4">
                  <RadioGroupItem value="basic" id="basic" className="border-gray-300" />
                  <Label htmlFor="basic" className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Basic Plan</span>
                    <span className="text-sm text-gray-500">$9.99/month</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4">
                  <RadioGroupItem value="pro" id="pro" className="border-gray-300" />
                  <Label htmlFor="pro" className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Pro Plan</span>
                    <span className="text-sm text-gray-500">$19.99/month</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4">
                  <RadioGroupItem value="enterprise" id="enterprise" className="border-gray-300" />
                  <Label htmlFor="enterprise" className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Enterprise Plan</span>
                    <span className="text-sm text-gray-500">$49.99/month</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">Update Plan</Button>
          </CardFooter>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Jun 1, 2023</TableCell>
                  <TableCell>$19.99</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>May 1, 2023</TableCell>
                  <TableCell>$19.99</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Apr 1, 2023</TableCell>
                  <TableCell>$19.99</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
              View All Invoices
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

