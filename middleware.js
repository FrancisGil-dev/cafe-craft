import { NextResponse } from "next/server";

export const middleware = (req) => {
    const url = req.url;
    
    const isLoggedIn = req.cookies.get("isLoggedIn");

    // Redirection if not logged in and trying to access dashboard or home
    if (!isLoggedIn && (url.includes("/cafe-craft") || url.includes("/cafe-craft/dashboard"))) {
        return NextResponse.redirect("http://localhost:3000/auth");
    }
   
    // Proceed to next middleware or handler if logged in or not accessing restricted routes
    return NextResponse.next();
}
