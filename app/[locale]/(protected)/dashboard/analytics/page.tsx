import { StatusBlock } from "@/components/blocks/status-block";
import { WelcomeBlock } from "@/components/blocks/welcome-block";
import { Box, ShoppingCart, TrendingUp } from "lucide-react";
import Image from "next/image";
import RevinueBarChart from "@/components/revenue-bar-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardDropdown from "@/components/dashboard-dropdown";
import OrdersBlock from "@/components/blocks/orders-block";
import EarningBlock from "@/components/blocks/earning-block";
import Customer from "./components/customer";
import RecentOrderTable from "./components/recent-order-table";
import VisitorsReportChart from "./components/visitors-report";
import VisitorsChart from "./components/visitors-chart";
import { products } from "./components/data";
import Product from "./components/product";
import { useTranslations } from "next-intl";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {AvatarFallback} from "@radix-ui/react-avatar";

const Analytics = () => {
  const t = useTranslations("EcommerceDashboard");
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 gap-5">

        <div className="col-span-12">
          <Card>
            <CardContent className=" p-6">
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 place-content-center">
                <div className="flex space-x-4 h-full items-center rtl:space-x-reverse">
                  <div className="flex-none">
                    <Avatar className="h-20 w-20 bg-transparent hover:bg-transparent">
                      <AvatarImage src="/images/all-img/main-user.png" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-2">
                  <span className="block font-light text-default-800">
                    {t("widget_title")},
                  </span>
                      <span className="block text-default-900">Mr. Jone Doe</span>
                    </h4>
                    <p className="text-sm text-default-600">{t("widget_desc")}</p>
                  </div>
                </div>
                {/*  status blocks */}
                <StatusBlock
                    title={t("growth_chart_title")}
                    total="$34,564"
                    chartType="bar"
                    className="bg-default-50 shadow-none border-none"
                    opacity={1}
                />
                <StatusBlock
                    title={t("growth_chart_title")}
                    total="$3,564"
                    chartColor="#80fac1"
                    className="bg-default-50 shadow-none border-none"
                    series={[40, 70, 45, 100, 75, 40, 80, 90]}
                    chartType="bar"
                    opacity={1}
                />
                <StatusBlock
                    title={t("growth_chart_title")}
                    total="$3,564"
                    chartColor="#ffbf99"
                    className="bg-default-50 shadow-none border-none"
                    chartType="bar"
                    series={[40, 70, 45, 100, 75, 40, 80, 90]}
                    opacity={1}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardContent className="pt-5">
              <RevinueBarChart height={420} />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-1">
              <CardTitle className="flex-1">{t("statistics")}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2  gap-5">
                <div className="col-span-2 md:col-span-1">
                  <OrdersBlock
                    title={t("orders")}
                    total="123k"
                    chartColor="#f1595c"
                    className="border-none shadow-none bg-default-50 "
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <OrdersBlock
                    title={t("profit")}
                    total="123k"
                    chartColor="#4669fa"
                    chartType="line"
                    percentageContent={
                      <span className="text-primary">+2.5%</span>
                    }
                    className="border-none shadow-none bg-default-50 col-span-2 md:col-span-1"
                  />
                </div>
                <div className="col-span-2">
                  <EarningBlock
                    title={t("earnings")}
                    total="$12,335.00"
                    percentage="+08%"
                    className="col-span-2 border-none shadow-none bg-default-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12  gap-5">
        <div className="lg:col-span-8 col-span-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-1">
              <CardTitle className="flex-1">{t("visitors_report")}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <VisitorsReportChart height={350} />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-1">
              <CardTitle className="flex-1">
                {t("Visitors_by_gender")}
              </CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <VisitorsChart />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <Card>
          <CardHeader className="flex flex-row items-center gap-1">
            <CardTitle className="flex-1">
              {t("best_selling_products")}
            </CardTitle>
            <DashboardDropdown />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
