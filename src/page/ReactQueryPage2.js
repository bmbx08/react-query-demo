import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage2 = () => {
  const ids = [1, 2, 3, 4];

  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:5000/posts/${id}`);
  };

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine:(results)=>{ //배열 안 결과들을 필요한 data로만 출력
        return {
            data: results.map((result=> result.data.data))
        }
    }
  }); //useQueries 말고 useQuery를 여러개 실행해도 됨. 하지만 병렬(비동기)로 실행되서 순차적이지 않음.
  console.log("rrrr",results);
  return <div></div>;
};

export default ReactQueryPage2;
