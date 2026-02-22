import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gbyjqzxtopzndgfyqtpi.supabase.co'
const supabaseKey = 'sb_publishable_DcVBkUBf4KN97kO-Qp2itg_pGY2Bigr'

export const supabase = createClient(supabaseUrl, supabaseKey)
