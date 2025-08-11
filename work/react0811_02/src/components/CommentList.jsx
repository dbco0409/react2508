import Comments from './Comments';

export default function CommentList(){
    const comment = [
    {
      name : "이인제",
      comment : "안녕하세요, 소플 입니다."
    },
    {
      name : "유자석",
      comment : "리액트 재미있어요~"
    },
    {
      name : "강민경",
      comment : "저도 리액트 배워보고 싶어요!"
    }
  ];

    return (
        <>
        {
            comment.map((item, index)=>{
                return (
                    <Comments name={item.name} comment={item.comment} />
                )
            })
        }
        </>
    )
}