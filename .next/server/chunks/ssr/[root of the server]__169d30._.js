module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/prisma/prisma.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
let prisma;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if (!global.prisma) {
        global.prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
    }
    prisma = global.prisma;
}
const __TURBOPACK__default__export__ = prisma;
}}),
"[externals]/bcrypt [external] (bcrypt, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("bcrypt", () => require("bcrypt"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/services/email.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EmailService": (()=>EmailService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$4$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/resend@4.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/resend/dist/index.mjs [app-ssr] (ecmascript)");
;
class EmailService {
    static loadResend = async ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$4$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
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
}}),
"[project]/src/enums.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[project]/src/services/auth.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthService": (()=>AuthService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/prisma/prisma.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__ = __turbopack_import__("[externals]/bcrypt [external] (bcrypt, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/email.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/enums.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/verify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/sign.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class AuthService {
    static readEmailTemplate(template) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync("./email-templates/" + template + ".html", "utf8");
    }
    static replaceEmailTemplateVariables(template, key, value) {
        // example variables = {{name}} or {{ name }}
        let first = template.replaceAll("{{" + key + "}}", value);
        let second = first.replaceAll("{{ " + key + " }}", value);
        return second;
    }
    static async signIn(email, password) {
        try {
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].users.findUnique({
                where: {
                    email: email
                }
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
            }
            const passHash = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].compare(password, user.password);
            if (!passHash) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
            }
            return user;
        } catch (error) {
            console.error(error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
    }
    static async signUp(email, password) {
        try {
            const passHash = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].hash(password, 10);
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].users.create({
                data: {
                    email: email,
                    password: passHash
                }
            });
            return user;
        } catch (error) {
            console.error(error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
    }
    static async forgotPassword(email) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].NOT_IMPLEMENTED;
    }
    static async checkAuthFromMiddleware(req) {
        const token = req.cookies.get("auth-token")?.value;
        if (!token) {
            return false;
        }
        try {
            const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtVerify"])(token, new TextEncoder().encode(process.env.AUTH_JWT_SECRET));
            return payload;
        } catch (error) {
            return false;
        }
    }
    static async generateToken(payload, ttl) {
        if (!ttl) {
            ttl = 1000 * 60 * 60 * 24;
            return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
                alg: "HS256",
                typ: "JWT"
            }).setExpirationTime(new Date(Date.now() + ttl)).sign(new TextEncoder().encode(process.env.AUTH_JWT_SECRET));
        }
        return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
            alg: "HS256",
            typ: "JWT"
        }).sign(new TextEncoder().encode(process.env.AUTH_JWT_SECRET));
    }
    static async sendPasswordResetEmail(email) {
        const token = await AuthService.generateToken({
            email: email,
            rndx: Math.random().toString(36).substring(2, 15)
        });
        const emailTemplate = AuthService.readEmailTemplate("password-reset");
        const emailTemplateWithVariables = AuthService.replaceEmailTemplateVariables(emailTemplate, "link", ("TURBOPACK compile-time value", "http://localhost:3000") + "/reset-password?token=" + token);
        const newToken = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].password_resets.create({
            data: {
                email: email,
                token: token,
                expiresAt: new Date(Date.now() + 1000 * 60 * 10)
            }
        });
        if (!newToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        const emailSent = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailService"].sendEmail(email, "Reset your password", emailTemplateWithVariables);
        if (!emailSent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
    static async verifyPasswordResetToken(newPassword, __token) {
        const token = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].password_resets.findUnique({
            where: {
                token: __token
            }
        });
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
        }
        const passHash = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].hash(newPassword, 10);
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].users.update({
            where: {
                email: token.email
            },
            data: {
                password: passHash
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].password_resets.delete({
            where: {
                token: __token
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
    static async sendEmailVerificationEmail(email) {
        // password reset token
        const token = await AuthService.generateToken({
            email: email,
            rndx: Math.random().toString(36).substring(2, 15)
        });
        const emailTemplate = AuthService.readEmailTemplate("email-verify");
        const emailTemplateWithVariables = AuthService.replaceEmailTemplateVariables(emailTemplate, "link", ("TURBOPACK compile-time value", "http://localhost:3000") + "/verify-email?token=" + token);
        const newToken = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email_verifications.create({
            data: {
                email: email,
                token: token,
                expiresAt: new Date(Date.now() + 1000 * 60 * 10)
            }
        });
        if (!newToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        const emailSent = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailService"].sendEmail(email, "Verify your email", emailTemplateWithVariables);
        if (!emailSent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INTERNAL_SERVER_ERROR;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
    static async verifyEmail(email, __token) {
        const token = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email_verifications.findUnique({
            where: {
                token: __token
            }
        });
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].users.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].INVALID_CREDENTIALS;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].users.update({
            where: {
                id: user.id
            },
            data: {
                emailVerifiedAt: new Date(Date.now())
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email_verifications.deleteMany({
            where: {
                email: email,
                token: __token
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERRORS"].OK;
    }
}
}}),
"[project]/src/context/actions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signInAction": (()=>signInAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/auth.ts [app-ssr] (ecmascript)");
;
const signInAction = async (email, password)=>{
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].signIn(email, password);
    return user;
};
}}),
"[project]/src/context/auth.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthContext": (()=>AuthContext),
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/actions.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    user: undefined
});
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const signIn = async (email, password)=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInAction"])(email, password);
        setUser(user);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__169d30._.js.map