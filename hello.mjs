import dotenv from 'dotenv'
dotenv.config()
import { createClient } from '@supabase/supabase-js'

const projectId = process.env.projectId
const anonPublic = process.env.anonPublic
// Create a single supabase client for interacting with your database
const supabase = createClient('https://'+projectId+'.supabase.co', anonPublic)

let { data, error } = await supabase
  .from('todos')
  .select('*')
          
if (!error && data) {
  console.log(data)
}
else if (error) console.log(error)
else console.log('No data', data, error)
          