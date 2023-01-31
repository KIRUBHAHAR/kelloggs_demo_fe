import axios from 'axios';

const host = process.env.SERVER_API_URL || "http://127.0.0.1:5000/"

const api = axios.create({
    baseURL: host 
  });

const getBacterialdata = async () => {
  try {
    const response = await api.get(`${host}/microbiome/get_bacterial`)
    // const data = await response.data
    // console.log('getBacterialdata data:', data)
    return response
  } catch (err) {
    console.log('error occured in fetching bacterial api', err)
    throw err
  }
}

const getFooddata = async () => {
  try {
    const response = await api.get(`${host}/microbiome/get_food`)
    //const data = await response.data
    // console.log('getFooddata data:', data)
    return response
  } catch (err) {
    console.log('error occured in fetching food api', err)
    throw err
  }
}

const getGutdata = async () => {
  try {
    const response = await api.get(`${host}/microbiome/get_gut`)
 
    return response
  } catch (err) {
    console.log('error occured in fetching gut api', err)
    throw err
  }
}

const getMicrodata = async () => {
  try {
    const response = await api.get(`${host}/microbiome/get_micro`)
    
    return response
  } catch (err) {
    console.log('error occured in fetching micro insights api', err)
    throw err
  }
}

const getNutridata = async () => {
  try {
    const response = await api.get(`${host}/microbiome/get_nutri`)
   
    return response
  } catch (err) {
    console.log('error occured in fetching nutri api', err)
    throw err
  }
}

const getProbiodata = async () => {
  try {
    const response = await api.get(`${host}/microbiome/get_pro`)
    return response
  } catch (err) {
    console.log('error occured in fetching probiotic api', err)
    throw err
  }
}

const getMetricsdata = async () => {
  try {
    const response = await api.get(`${host}/vet/get_microMetrics`)
   
    return response
  } catch (err) {
    console.log('error occured in fetching micrometrics api', err)
    throw err
  }
}

const getOveralldata = async () => {
  try {
    const response = await api.get(`${host}/vet/get_over`)
   
    return response
  } catch (err) {
    console.log('error occured in fetching overallrec api', err)
    throw err
  }
}

const getPotdata = async () => {
  try {
    const response = await api.get(`${host}/vet/get_pot`)
  
    return response
  } catch (err) {
    console.log('error occured in fetching potentialpathogen api', err)
    throw err
  }
}

const APIService = {
  getBacterialdata,
  getFooddata,
  getGutdata,
  getMicrodata,
  getNutridata,
  getProbiodata,
  getMetricsdata,
  getOveralldata,
  getPotdata 
  };
  
  export default APIService;