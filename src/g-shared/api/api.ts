import axios from "axios"
import { USER_LS_KEY } from "@/g-shared/const/localstorage"

// можно так, можно через __API__
// const baseURL = __IS_DEV__ ? "http://localhost:8000" : "https://production.ru"

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LS_KEY),
  },
})