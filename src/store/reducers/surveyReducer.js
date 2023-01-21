const initialState = {
    data:[],
    kualitasPelayanan: [],
    penyimpanganPelayanan: [],
    pengarahanPetugas: [],
    usia: [],
    perbaikan: [],
    jenisKelamin: [],
    pendidikan: [],

    total: 0,
}

export default function respondenReducer (state= initialState, action) {
if (action.type === "SURVEY/TOTAL" ){
    return {...state, total:action.payload}
    }
    if (action.type === "SURVEY/DATA" ){
        return {...state, data:action.payload}
    }
    if (action.type === "SURVEY/KUALITAS" ){
        return {...state, kualitasPelayanan:action.payload}
    }
    if (action.type === "SURVEY/PENYIMPANGAN" ){
        return {...state, penyimpanganPelayanan:action.payload}
    }
    if (action.type === "SURVEY/PENGARAHAN" ){
        return {...state, pengarahanPetugas:action.payload}
    }
    if (action.type === "SURVEY/USIA" ){
        return {...state, usia:action.payload}
    }
    if (action.type === "SURVEY/PERBAIKAN" ){
        return {...state, perbaikan:action.payload}
    }
    if (action.type === "SURVEY/GENDER" ){
        return {...state, jenisKelamin:action.payload}
    }
    if (action.type === "SURVEY/PENDIDIKAN" ){
        return {...state, pendidikan:action.payload}
    }
    return state;
}