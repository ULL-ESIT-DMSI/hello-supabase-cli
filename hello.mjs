/*
➜  new-keystatic-project curl 'https://sexzgsjhrqibssjfhhbz.supabase.co/rest/v1/todos' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNleHpnc2pocnFpYnNzamZoaGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTAwMzcsImV4cCI6MjAxODQ2NjAzN30.5KNv6CMvzUKXbn2zTWRWdPtRGMjIIsQuiv6Cr4yPqFs" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNleHpnc2pocnFpYnNzamZoaGJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjg5MDAzNywiZXhwIjoyMDE4NDY2MDM3fQ.zuRH6XVKJr24GVqMHLMvTeb1JSAOGWYvUSvD4oZ_Jhw"
*/
import dotenv from 'dotenv'
dotenv.config()
import { createClient } from '@supabase/supabase-js'

const projectId = process.env.projectId
const anonPublic = process.env.anonPublic
// Create a single supabase client for interacting with your database
const supabase = createClient('https://'+projectId+'.supabase.co', anonPublic)

let { data: todos, error } = await supabase
  .from('todos')
  .select('*')
          
if (!error && todos) {
  console.log(todos)
}
else if (error) console.log(error)