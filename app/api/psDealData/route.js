const { cookies } = require("next/headers");
const { NextResponse, NextRequest } = require("next/server");
const { createRouteHandlerClient } = require("@supabase/auth-helpers-nextjs");

export const GET = async (req) => {
    const supabase = createRouteHandlerClient({ cookies });

    const { data, error } = await supabase.from("deals_games").select('*');

    // Then logging the data to the console

    return NextResponse.json({ data });
};


