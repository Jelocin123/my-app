const { cookies } = require("next/headers");
const { NextResponse, NextRequest } = require("next/server");
const { createRouteHandlerClient } = require("@supabase/auth-helpers-nextjs");


export const GET = async (req, route) => {
    const supabase = createRouteHandlerClient({ cookies });

    const id = route.params.id;

    const { data, error } = await supabase
        .from('deals_games')
        .select('*')
        .eq('id', id);

    if (error == null) {
        return NextResponse.json({ data });
    }

    return NextResponse.json({ error: error.message });
};


