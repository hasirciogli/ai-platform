import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Lock, CreditCard, Plus, Trash2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Profile() {
    return (
        <div className="container mx-auto py-6 px-4 bg-white">
            <h1 className="text-2xl font-semibold mb-6 text-gray-900">Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 shadow-sm border border-gray-200">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-xl text-gray-800">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="account" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 mb-4">
                                <TabsTrigger value="account" className="text-sm">
                                    Account
                                </TabsTrigger>
                                <TabsTrigger value="security" className="text-sm">
                                    Security
                                </TabsTrigger>
                                <TabsTrigger value="billing" className="text-sm">
                                    Billing
                                </TabsTrigger>
                                <TabsTrigger value="payment" className="text-sm">
                                    Payment Methods
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                                            Full Name
                                        </Label>
                                        <Input
                                            id="fullName"
                                            placeholder="John Doe"
                                            className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                            disabled
                                        />
                                    </div>
                                    <Button className="bg-gray-800 hover:bg-gray-700 text-white">Update Account</Button>
                                </form>
                            </TabsContent>
                            <TabsContent value="security">
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">
                                            Current Password
                                        </Label>
                                        <Input
                                            id="currentPassword"
                                            type="password"
                                            className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                                            New Password
                                        </Label>
                                        <Input
                                            id="newPassword"
                                            type="password"
                                            className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                            Confirm New Password
                                        </Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                        />
                                    </div>
                                    <Button className="bg-gray-800 hover:bg-gray-700 text-white">Update Password</Button>
                                </form>
                            </TabsContent>
                            <TabsContent value="billing">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Current Plan</h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            You are currently on the <strong>Pro Plan</strong>.
                                        </p>
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
                                    <Button className="bg-gray-800 hover:bg-gray-700 text-white">Update Plan</Button>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Billing History</h3>
                                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                                            View Billing History
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="payment">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Your Credit Cards</h3>
                                        <div className="space-y-4">
                                            {/* Example credit card */}
                                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                                <div className="flex items-center space-x-4">
                                                    <CreditCard className="h-6 w-6 text-gray-400" />
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-700">**** **** **** 1234</p>
                                                        <p className="text-xs text-gray-500">Expires 12/2025</p>
                                                    </div>
                                                </div>
                                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            {/* Add more credit cards here */}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Add New Card</h3>
                                        <form className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">
                                                    Card Number
                                                </Label>
                                                <Input
                                                    id="cardNumber"
                                                    placeholder="1234 5678 9012 3456"
                                                    className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">
                                                        Expiry Date
                                                    </Label>
                                                    <Input
                                                        id="expiryDate"
                                                        placeholder="MM/YY"
                                                        className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="cvv" className="text-sm font-medium text-gray-700">
                                                        CVV
                                                    </Label>
                                                    <Input
                                                        id="cvv"
                                                        placeholder="123"
                                                        className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="cardholderName" className="text-sm font-medium text-gray-700">
                                                    Cardholder Name
                                                </Label>
                                                <Input
                                                    id="cardholderName"
                                                    placeholder="John Doe"
                                                    className="border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                                                />
                                            </div>
                                            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                                                <Plus className="h-4 w-4 mr-2" /> Add Card
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border border-gray-200">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-xl text-gray-800">Profile Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="relative group">
                            <Avatar className="h-16 w-16 cursor-pointer transition-opacity duration-300 group-hover:opacity-80">
                                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
                                <AvatarFallback className="bg-gray-200 text-gray-700">JD</AvatarFallback>
                            </Avatar>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <label
                                    htmlFor="avatar-upload"
                                    className="cursor-pointer text-white text-xs font-medium bg-black bg-opacity-50 px-2 py-1 rounded"
                                >
                                    Update Image
                                </label>
                                <input
                                    id="avatar-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        // Handle file upload here
                                        console.log("File selected:", e.target.files?.[0])
                                    }}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <User className="h-4 w-4" />
                                <span>Account created on Jan 1, 2023</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Mail className="h-4 w-4" />
                                <span>Email verified</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Lock className="h-4 w-4" />
                                <span>2FA enabled</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <CreditCard className="h-4 w-4" />
                                <span>Pro Plan</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

