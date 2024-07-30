import React from "react";
import {usePostQuery} from "../hooks/usePosts";

const ReactQueryPage = () => {
  const {data, isLoading, isError, error, refetch} = usePostQuery();

    

  console.log("data", data, isLoading);
  console.log("error", isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {data?.map((item) => (
      <div>{item.title}</div>
    ))}
      <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>
  );
};
//api호출은 캐시에 저장되 있어도 호출한다.
//호출 과정: 캐시 데이터 보여줌->뒤에서 api호출을 함->업데이트된 데이터 보여줌-> 캐시 업데이트
export default ReactQueryPage;
