import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ResetPassword() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <Input id="newPassword" type="password" placeholder="Enter new password" className="w-full" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                Confirm New Password
                            </label>
                            <Input id="confirmPassword" type="password" placeholder="Confirm new password" className="w-full" />
                        </div>
                        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Set New Password</Button>
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

