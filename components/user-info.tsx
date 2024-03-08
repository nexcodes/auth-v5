import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  const userDetailsList = [
    {
      label: "ID",
      value: user?.id,
    },
    {
      label: "Name",
      value: user?.name,
    },
    {
      label: "Email",
      value: user?.email,
    },
    {
      label: "Role",
      value: user?.role,
    },
  ];

  return (
    <Card className="max-w-[600px] w-full shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {userDetailsList.map((detail, index) => (
          <div
            key={`${detail.label}-${index}`}
            className="flex justify-between"
          >
            <p className="text-lg font-semibold">{detail.label}</p>
            <p className="text-lg">{detail.value}</p>
          </div>
        ))}
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
