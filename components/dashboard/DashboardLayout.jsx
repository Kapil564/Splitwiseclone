"use client";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { BarLoader } from "react-spinners";
import { api } from "../../convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../ui/newCard";
import { PlusCircle, Users, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExpenseSummary } from "./dasboardComponents/expense-summery";
import { BalanceSummary } from "./dasboardComponents/balance-summery";
import { GroupList } from "./dasboardComponents/group-list";
import { get } from "http";
import { getUserBalances } from "@/convex/dashboard";
export function DashboardLayout({ children }) {
  const { data: balances, isLoading: balancesLoading } = useConvexQuery(
    api.dashboard.getUserBalances
   
  );
   console.log(data)

  const { data: groups, isLoading: groupsLoading } = useConvexQuery(
    api.dashboard.getUserGroups
  );

  const { data: totalSpent, isLoading: totalSpentLoading } = useConvexQuery(
    api.dashboard.getTotalSpent
  );

  const { data: monthlySpending, isLoading: monthlySpendingLoading } =
    useConvexQuery(api.dashboard.getMonthlySpending);

  const isLoading =
    balancesLoading ||
    groupsLoading ||
    totalSpentLoading ||
    monthlySpendingLoading;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-64 pt-16">
        {children || (
          <div className="p-6">
            {/* Dashboard content will go here */}
            {isLoading ? (
              <div>
                <BarLoader color="#4A90E2" width="100%" />
              </div>
            ) : (
              <>
                <div className="flex  justify-between flex-col sm:flex-row sm:items-center gap-4">
                  <h2 className="gradient text-5xl bold"> Dashboard</h2>
                  <Button asChild>
                    <Link href="/expenses/new">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add expense
                    </Link>
                  </Button>
                </div>
                {/*  Balance Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Balance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        {balances?.totalBalance > 0 ? (
                          <div>
                            <span className="text-green-600">
                              +₹{balances?.totalBalance.toFixed(2)}
                            </span>
                          </div>
                        ) : balances?.totalBalance < 0 ? (
                          <span className="text-red-600">
                            -₹{Math.abs(balances?.totalBalance).toFixed(2)}
                          </span>
                        ) : (
                          <span>₹0.00</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {balances?.totalBalance > 0
                          ? "You are owed money"
                          : balances?.totalBalance < 0
                            ? "You owe money"
                            : "All settled up!"}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        You are owed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        ${balances?.youAreOwed.toFixed(2)}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        From {balances?.oweDetails?.youAreOwedBy?.length || 0}{" "}
                        people
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        You owe
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {balances?.oweDetails?.youOwe?.length > 0 ? (
                        <>
                          <div className="text-2xl font-bold text-red-600">
                            ${balances?.youOwe.toFixed(2)}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            To {balances?.oweDetails?.youOwe?.length || 0}{" "}
                            people
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="text-2xl font-bold">$0.00</div>
                          <p className="text-xs text-muted-foreground mt-1">
                            You don't owe anyone
                          </p>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left column */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Expense summary */}
                    <ExpenseSummary
                      monthlySpending={monthlySpending}
                      totalSpent={totalSpent}
                    />
                  </div>

                  {/* right */}
                  <div className="space-y-6 ">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle>Balance Details</CardTitle>
                          <Button variant="link" asChild className="p-0">
                            <Link href="/contacts">
                              View all
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <BalanceSummary balances={balances} />
                      </CardContent>
                    </Card>
                    {/* groups */}
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle>Your Groups</CardTitle>
                          <Button variant="link" asChild className="p-0">
                            <Link href="/contacts">
                              View all
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <GroupList groups={groups} />
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" asChild className="w-full">
                          <Link href="/contacts?createGroup=true">
                            <Users className="mr-2 h-4 w-4" />
                            Create new group
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
