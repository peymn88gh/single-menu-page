import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ActionAreaCard from "../components/Card"
import CollapsibleTable from "../components/CollapsibleTable"
const MainPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/backGround.jpeg")',
          backgroundSize: "cover",
          // backgroundAttachment: "fixed",
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          width:"100%",
          height:"800px"
        }}
      >
        <ActionAreaCard/>
        <CollapsibleTable />
      </div>
    </>
  );
};
export default MainPage;
