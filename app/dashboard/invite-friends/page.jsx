import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { InviteFriendsForm } from "@/components/dashboard/InviteFriendsForm";

export default function InviteFriendsPage() {
  return (
    <DashboardLayout>
      <div className="container max-w-2xl mx-auto py-8 px-4">
        <div className="space-y-6">
          <div>
            <h1 className="heading-lg">Invite Friends</h1>
            <p className="body-md text-muted-foreground mt-2">
              Share Splitwise with your friends and start splitting expenses together
            </p>
          </div>
          
          <InviteFriendsForm />
        </div>
      </div>
    </DashboardLayout>
  );
}