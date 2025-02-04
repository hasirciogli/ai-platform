import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ForgotPassword() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
                        </div>
                        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Reset Password</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/login" className="text-sm text-blue-600 hover:underline">
                        Back to Login
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

