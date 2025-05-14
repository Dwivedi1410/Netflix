import { useSelector } from "react-redux";
import AISearch from "./AISearch";
import Header from "./Header";
import LowerDivision from "./LowerDivision";
import UpperDivision from "./UpperDivision";
import appStore from "../utils/appStore";

const Browse = () => {
  const aiButtonClick = useSelector((store) => store.ai.aiButtonClick);

  return (
    <div>
      <Header />
      {aiButtonClick ? (
        <AISearch />
      ) : (
        <>
          <UpperDivision />
          <LowerDivision />
        </>
      )}
    </div>
  );
};

export default Browse;
