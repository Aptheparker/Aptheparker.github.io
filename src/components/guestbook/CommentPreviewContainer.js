import classes from "./CommentPreviewContainer.module.css";
import CommentPreviewCard from "./CommentPreviewCard";

//여기에서 데이터 DB에서 fetch+ display할 것.

const dummyData = [ //시간순에 따라 실시간 정렬작업 필요
  { id: 1, content: "1" },
  { id: 2, content: "2" },
  { id: 3, content: "3" },
  { id: 4, content: "4" },
  { id: 5, content: "5" },
  { id: 6, content: "6" },
  { id: 7, content: "7" },
  { id: 8, content: "8" },
  { id: 9, content: "9" },
  { id: 10, content: "10" },
  { id: 11, content: "11" },
  { id: 12, content: "12" },
  { id: 13, content: "13" },
  { id: 14, content: "14" },
  { id: 15, content: "15" },
  { id: 16, content: "16" },
  { id: 17, content: "17" },
  { id: 18, content: "18" },
  { id: 19, content: "19" },
];
function CommentPreviewContainer() {
  return (
    <div className={classes["container"]}>
      {dummyData.map(
        (data) =>{return <CommentPreviewCard content={data}/>}
      )}
    </div>
  );
}

export default CommentPreviewContainer;
