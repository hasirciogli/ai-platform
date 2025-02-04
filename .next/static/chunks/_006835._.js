(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_006835._.js", {

"[project]/prisma/prisma.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$3$2e$1_prisma$40$6$2e$3$2e$1_typescript$40$5$2e$7$2e$3_$5f$typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@prisma+client@6.3.1_prisma@6.3.1_typescript@5.7.3__typescript@5.7.3/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
;
let prisma;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if (!global.prisma) {
        global.prisma = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$3$2e$1_prisma$40$6$2e$3$2e$1_typescript$40$5$2e$7$2e$3_$5f$typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismaClient"]();
    }
    prisma = global.prisma;
}
const __TURBOPACK__default__export__ = prisma;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/email.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EmailService": (()=>EmailService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$4$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/resend@4.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/resend/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
class EmailService {
    static loadResend = async ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$4$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resend"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.RESEND_API_KEY);
    };
    static async sendEmail(email, subject, body) {
        const resend = await EmailService.loadResend();
        try {
            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [
                    email
                ],
                subject: subject,
                html: body
            });
            if (error) {
                console.error(error);
                return false;
            }
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/enums.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AUTH_ERRORS": (()=>AUTH_ERRORS),
    "SUBSCRIPTION_ERRORS": (()=>SUBSCRIPTION_ERRORS)
});
var AUTH_ERRORS = /*#__PURE__*/ function(AUTH_ERRORS) {
    AUTH_ERRORS["INVALID_CREDENTIALS"] = "auth/invalid-credentials";
    AUTH_ERRORS["INTERNAL_SERVER_ERROR"] = "auth/internal-server-error";
    AUTH_ERRORS["NOT_IMPLEMENTED"] = "auth/not-implemented";
    AUTH_ERRORS["OK"] = "auth/ok";
    return AUTH_ERRORS;
}({});
var SUBSCRIPTION_ERRORS = /*#__PURE__*/ function(SUBSCRIPTION_ERRORS) {
    SUBSCRIPTION_ERRORS["OK"] = "subscription/ok";
    SUBSCRIPTION_ERRORS["NOT_FOUND"] = "subscription/not-found";
    SUBSCRIPTION_ERRORS["INTERNAL_SERVER_ERROR"] = "subscription/internal-server-error";
    SUBSCRIPTION_ERRORS["NOT_IMPLEMENTED"] = "subscription/not-implemented";
    SUBSCRIPTION_ERRORS["INVALID_PARAMS"] = "subscription/invalid-params";
    SUBSCRIPTION_ERRORS["INVALID_STATUS"] = "subscription/invalid-status";
    SUBSCRIPTION_ERRORS["INVALID_TYPE"] = "subscription/invalid-type";
    SUBSCRIPTION_ERRORS["INVALID_FREE_TRIAL"] = "subscription/invalid-free-trial";
    SUBSCRIPTION_ERRORS["INVALID_TILL"] = "subscription/invalid-till";
    SUBSCRIPTION_ERRORS["INVALID_SYSTEM_METADATA"] = "subscription/invalid-system-metadata";
    SUBSCRIPTION_ERRORS["INVALID_CANCEL_REASON"] = "subscription/invalid-cancel-reason";
    SUBSCRIPTION_ERRORS["INVALID_USER_ID"] = "subscription/invalid-user-id";
    SUBSCRIPTION_ERRORS["INVALID_PAYMENT_ID"] = "subscription/invalid-payment-id";
    SUBSCRIPTION_ERRORS["INVALID_PAYMENT_STATUS"] = "subscription/invalid-payment-status";
    SUBSCRIPTION_ERRORS["INVALID_PAYMENT_AMOUNT"] = "subscription/invalid-payment-amount";
    SUBSCRIPTION_ERRORS["INVALID_PAYMENT_CURRENCY"] = "subscription/invalid-payment-currency";
    SUBSCRIPTION_ERRORS["INVALID_PAYMENT_DATE"] = "subscription/invalid-payment-date";
    return SUBSCRIPTION_ERRORS;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/auth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthService": (()=>AuthService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/prisma/prisma.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcrypt$40$5$2e$1$2e$1$2f$node_modules$2f$bcrypt$2f$bcrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/bcrypt@5.1.1/node_modules/bcrypt/bcrypt.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/email.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/enums.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/verify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/sign.js [app-client] (ecmascript)");
;
;
;
;
;
;
class AuthService {
    static readEmailTemplate(template) {
        return fs.readFileSync("./email-templates/" + template + ".html", "utf8");
    }
    static replaceEmailTemplateVariables(template, key, value) {
        // example variables = {{name}} or {{ name }}
        let first = template.replaceAll("{{" + key + "}}", value);
        let second = first.replaceAll("{{ " + key + " }}", value);
        return second;
    }
    static async signIn(email, password) {
        try {
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].users.findUnique({
                where: {
                    email: email
                }
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
            }
            const passHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcrypt$40$5$2e$1$2e$1$2f$node_modules$2f$bcrypt$2f$bcrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
            if (!passHash) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
            }
            return user;
        } catch (error) {
            console.error(error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
    }
    static async signUp(email, password) {
        try {
            const passHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcrypt$40$5$2e$1$2e$1$2f$node_modules$2f$bcrypt$2f$bcrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].users.create({
                data: {
                    email: email,
                    password: passHash
                }
            });
            return user;
        } catch (error) {
            console.error(error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
    }
    static async forgotPassword(email) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].NOT_IMPLEMENTED;
    }
    static async checkAuthFromMiddleware(req) {
        const token = req.cookies.get("auth-token")?.value;
        if (!token) {
            return false;
        }
        try {
            const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtVerify"])(token, new TextEncoder().encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AUTH_JWT_SECRET));
            return payload;
        } catch (error) {
            return false;
        }
    }
    static async generateToken(payload, ttl) {
        if (!ttl) {
            ttl = 1000 * 60 * 60 * 24;
            return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
                alg: "HS256",
                typ: "JWT"
            }).setExpirationTime(new Date(Date.now() + ttl)).sign(new TextEncoder().encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AUTH_JWT_SECRET));
        }
        return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
            alg: "HS256",
            typ: "JWT"
        }).sign(new TextEncoder().encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AUTH_JWT_SECRET));
    }
    static async sendPasswordResetEmail(email) {
        const token = await AuthService.generateToken({
            email: email,
            rndx: Math.random().toString(36).substring(2, 15)
        });
        const emailTemplate = AuthService.readEmailTemplate("password-reset");
        const emailTemplateWithVariables = AuthService.replaceEmailTemplateVariables(emailTemplate, "link", ("TURBOPACK compile-time value", "http://localhost:3000") + "/reset-password?token=" + token);
        const newToken = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].password_resets.create({
            data: {
                email: email,
                token: token,
                expiresAt: new Date(Date.now() + 1000 * 60 * 10)
            }
        });
        if (!newToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        const emailSent = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailService"].sendEmail(email, "Reset your password", emailTemplateWithVariables);
        if (!emailSent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
    static async verifyPasswordResetToken(newPassword, __token) {
        const token = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].password_resets.findUnique({
            where: {
                token: __token
            }
        });
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
        }
        const passHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcrypt$40$5$2e$1$2e$1$2f$node_modules$2f$bcrypt$2f$bcrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hash(newPassword, 10);
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].users.update({
            where: {
                email: token.email
            },
            data: {
                password: passHash
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].password_resets.delete({
            where: {
                token: __token
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
    static async sendEmailVerificationEmail(email) {
        // password reset token
        const token = await AuthService.generateToken({
            email: email,
            rndx: Math.random().toString(36).substring(2, 15)
        });
        const emailTemplate = AuthService.readEmailTemplate("email-verify");
        const emailTemplateWithVariables = AuthService.replaceEmailTemplateVariables(emailTemplate, "link", ("TURBOPACK compile-time value", "http://localhost:3000") + "/verify-email?token=" + token);
        const newToken = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].email_verifications.create({
            data: {
                email: email,
                token: token,
                expiresAt: new Date(Date.now() + 1000 * 60 * 10)
            }
        });
        if (!newToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        const emailSent = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailService"].sendEmail(email, "Verify your email", emailTemplateWithVariables);
        if (!emailSent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
    static async verifyEmail(email, __token) {
        const token = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].email_verifications.findUnique({
            where: {
                token: __token
            }
        });
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].users.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].users.update({
            where: {
                id: user.id
            },
            data: {
                emailVerifiedAt: new Date(Date.now())
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].email_verifications.deleteMany({
            where: {
                email: email,
                token: __token
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/actions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signInAction": (()=>signInAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/auth.ts [app-client] (ecmascript)");
;
const signInAction = async (email, password)=>{
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].signIn(email, password);
    return user;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/auth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthContext": (()=>AuthContext),
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/actions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: undefined
});
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const signIn = async (email, password)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAction"])(email, password);
        setUser(user);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/auth.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(AuthProvider, "mHPdN9ijFb/Iq5Lg8FW1zJVLqEc=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_refresh__.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_006835._.js.map