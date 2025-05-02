import 'stream-browserify'
import 'buffer'
import 'events'
import 'process'
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import { AppState } from 'react-native'
//import { zustandStorage } from '../store/mmkv'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

console.log('supabaseUrl', supabaseUrl)

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        //debug:true
    }
})

AppState.addEventListener('change', (nextAppState) => {
    if (nextAppState === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})