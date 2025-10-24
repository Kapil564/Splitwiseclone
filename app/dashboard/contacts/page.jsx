"use client";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { BarLoader } from "react-spinners";
import {Navbar} from "@/components/dashboard/Navbar";
import Link from "next/link";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/newCard";
import { Plus, User, Users } from "lucide-react";
import { CreateGroupModal } from "./_components/create-group-modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/newavatar";
export default function ContactsPage() {
  const { data, isLoading } = useConvexQuery(api.contacts.getAllContacts);
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);

  const router = useRouter();


  if (isLoading) {
    return (
      <div className="">
        <Navbar />
        <Sidebar />
        <div className="min-h-screen bg-background">
          <BarLoader width={"100%"} color="#36d7b7" />
        </div>
      </div>
    );
  }

  const { users, groups } = data || { users: [], groups: [] };

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <Sidebar />
      <main className="ml-64 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-center  p-6 gap-4 justify-between mb-6">
          <h1 className="text-5xl gradient-title">Contacts</h1>
          <Button onClick={() => setIsCreateGroupModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Group
          </Button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <User className="mr-2 h-5 w-5" />
              People
            </h2>
            {users.length === 0?(
              <Card>
              <CardContent className="py-6 text-center text-muted-foreground">
                No contacts yet. Add an expense with someone to see them here.
              </CardContent>
            </Card>
            ):(
              <div className="flex flex-col gap-4">
              {users.map((user) => (
                <Link key={user.id} href={`/person/${user.id}`}>
                  <Card className="hover:bg-muted/30 transition-colors cursor-pointer">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.imageUrl} />
                            <AvatarFallback>
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
              </div>
            )}

          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Groups
            </h2>
             {users.length === 0?(
              <Card>
              <CardContent className="py-6 text-center text-muted-foreground">
                No groups yet. Add a groups to see them here.
              </CardContent>
            </Card>
            ):(
              <div className="flex flex-col gap-4">
               {groups.map((group) => (
                <Link key={group.id} href={`/groups/${group.id}`}>
                  <Card className="hover:bg-muted/30 transition-colors cursor-pointer">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-md">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{group.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {group.memberCount} members
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
              </div>
            )}
          </div>
        </div>
        {/* Create Group Modal */}
        <CreateGroupModal 
        isOpen={isCreateGroupModalOpen} 
        onClose={() => setIsCreateGroupModalOpen(false)}
        onSuccess={(groupId) => router.push(`/groups/${groupId}`)}
         />
      </main>
    </div>
  );
}
