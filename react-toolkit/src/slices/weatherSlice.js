import { createSlice } from '@reduxjs/toolkit'

// 날씨API를 통해서 값을 가져옴, >> 비동기 함수
// loading은 fetchAPI를 사용할때 걸리는 시간동안 true
// startLoading, endLoading, getWeather(가져온 값을 할당)

// >> 값이 바로바로 바뀌는 것은 reducer에 바로작성
// >> 값을 서버에서 받아오는 경우 시간이걸리므로 thunk에 작성
export const weatherSlice = createSlice({
    name: "weather",
    initialState : {
        weather : null,
        loading : false
    },
    reducers : {
        startLoading : (state)=>{ state.loading = true },
        endLoading : (state)=>{ state.loading = false },
        getWeather : (state, action)=>{ 
            // action.payload는 날씨API에서 받아온 값
            state.weather = action.payload
        }
    }
})

// thunk를 사용한 액션생성함수 작성
export const getWeatherAPI = () => async(dispatch) => {
    dispatch(startLoading())
    try{
        // try-catch구문을 통해서 
        // 오류가 날 확률이 있는 코드를 try에 넣고
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=2a1916c10e2b8385ff68acf916a2a813')
        const data = await response.json()
        dispatch(getWeather(data.weather[0].description));
    }
    catch {
        // 오류가 났을때 실행할 내용을 아래 작성
        dispatch(getWeather("없음"));
    }
    dispatch(endLoading())
}

export const { startLoading, endLoading, getWeather } =weatherSlice.actions
export default weatherSlice.reducer