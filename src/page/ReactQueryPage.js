import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";


const ReactQueryPage = () => {

    const fetchPost=()=>{
        return axios.get('http://localhost:5000/posts')
    }
    const {isLoading, data, isError, error}=useQuery({ //useQuery는 isLoading 상태도 제공해준다
        queryKey:['posts'],
        queryFn:fetchPost,
        retry: 1,
        select:(data)=>{
            return data.data //data출력할 때 data.data만 return하라는 명령
        },
        gcTime: 5000 //캐시 수명시간 설정, ms기준(5000ms->5s), default값=5분
    });  //기본으로 useQuery는 component실행될 때 바로 실행된다. 버튼, 상황에 따라 실행되게 설정 가능.
    console.log("data",data, isLoading);
    console.log("error", isError, error);

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
    return <div>{data.map((item)=>(
        <div>{item.title}</div>
    ))}</div>
};
//api호출은 캐시에 저장되 있어도 호출한다.
//호출 과정: 캐시 데이터 보여줌->뒤에서 api호출을 함->업데이트된 데이터 보여줌-> 캐시 업데이트
export default ReactQueryPage;
