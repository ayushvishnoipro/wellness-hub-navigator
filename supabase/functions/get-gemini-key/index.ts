// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the API key from environment variables
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    
    console.log('Attempting to retrieve Gemini API key')
    
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment variables')
      throw new Error('GEMINI_API_KEY not configured')
    }

    console.log('Successfully retrieved Gemini API key')
    
    return new Response(
      JSON.stringify({ 
        GEMINI_API_KEY,
        status: 'success' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in get-gemini-key function:', error.message)
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        status: 'error'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})