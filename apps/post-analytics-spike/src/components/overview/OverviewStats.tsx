// The main Web stats component that encapsulates the breakdown

import {Badge, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Separator} from '@tryghost/shade';

const OverviewStats = () => {
    return (
        <div className="grid w-full grid-cols-3 gap-6 py-6">
            <Card className='col-span-2'>
                <CardHeader>
                    <CardTitle>Newsletter performance</CardTitle>
                    <CardDescription><Badge>Sent</Badge> — September 19 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <Separator />
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Feedback</CardTitle>
                    <CardDescription>17 reactions</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

            <Card className='col-span-2'>
                <CardHeader>
                    <CardTitle>Click performance</CardTitle>
                    <CardDescription>Top links in email newsletter</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Conversion</CardTitle>
                    <CardDescription>3 members signed up on this post</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default OverviewStats;