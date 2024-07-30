import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const fetchPost = () => { //queryData매개변수는 queryFn에서 전달받는다.
    // const id = query/Data.queryKey[1];
    return axios.get(`http://localhost:5000/posts`);
  };

export const usePostQuery=()=>{
    return useQuery({ //기본으로 useQuery는 component실행될 때 바로 실행된다. 버튼, 상황에 따라 실행되게 설정 가능.
        //useQuery는 isLoading 상태도 제공해준다
        queryKey: ["posts",], //queryKey는 unique(중복X)해야 한다.
        queryFn: ()=>fetchPost(),
        retry: 1,
        select: (data) => {
          return data.data; //data출력할 때 data.data만 return하라는 명령
        },
    }); 
}
// staleTime:60000, //fresh상태 시간 설정, fresh일 때는 api호출을 하지 않음, staleTime은 자주 호출하지 않을 api호출에만 설정하는게 좋음.
// gcTime: 10000 //캐시 수명시간 설정, ms기준(5000ms->5s), default값=5분, 데이터가 inactive된 순간부터 시간 시작
// refetchInterval: 3000 //3초마다 api재호출
// refetchOnMount: false, //component 다시 부를 때마다 api호출 안하는 기능
// refetchOnWindowFocus: true //창을 띄울때마다 api호출(alt+tab)
// enabled:false //component 처음 부를 때 api호출 여부, 다양한 조건 가능


//api호출 페이지를 분리해서 장점(usePosts.js)-> 원하는 곳에서 호출할 수 있다.