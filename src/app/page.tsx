import Header from "./components/Header";
import Cards from "./components/Cards";
import RecentTransaction from "./components/RecentTransaction";
import WeeklyActivity from "./components/WeeklyActivity";
import SideBar from "./components/SideBar";
import CreditCards from "./components/CreditCards";
import PieChart from "./components/PieChart";
import QuickTransfer from "./components/QuickTransfer";

export default function Home() {
  return (
    <main className="  lg:max-w-[1024px] 1xl:max-w-[1440px] max-w-[375px] mx-auto">
      <SideBar />
      <Header />
      <div className="lg:w-[793px] lg:flex-wrap lg:ml-[230px] lg:mt-[1.25rem] lg:mb-[1.56rem] lg:px-[1.56rem] lg:flex lg:flex-row  lg:mx-0">
        <div className="hidden lg:block">
          <CreditCards />
        </div>
        <div className="lg:hidden">
          <Cards />
        </div>
        <RecentTransaction />
        <WeeklyActivity />
        <PieChart />
        <QuickTransfer />
      </div>
    </main>
  );
}
