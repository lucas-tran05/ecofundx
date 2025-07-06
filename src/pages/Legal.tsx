import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LegalPage() {
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();

    const type = searchParams.get("type");

    const legalContent: Record<string, { title: string; body: string }> = {
        terms: {
            title: t("terms-of-use"),
            body: `
**1. Giới thiệu**  
Khi sử dụng nền tảng của chúng tôi, bạn đồng ý tuân thủ theo các điều khoản dưới đây...

**2. Trách nhiệm người dùng**  
Người dùng cam kết không sử dụng dịch vụ vào mục đích vi phạm pháp luật...

(vv)
`,
        },
        privacy: {
            title: t("privacy-policy"),
            body: `
**1. Chúng tôi thu thập gì?**  
Chúng tôi thu thập thông tin bạn cung cấp khi đăng ký và sử dụng dịch vụ...

**2. Cách chúng tôi sử dụng thông tin**  
Chúng tôi chỉ sử dụng thông tin nhằm cải thiện trải nghiệm của bạn...

(vv)
`,
        },
        regulations: {
            title: t("fundraising-regulations"),
            body: `
**1. Quy định về gây quỹ**  
Tất cả các chiến dịch gây quỹ phải tuân theo quy trình xét duyệt...

**2. Giới hạn & cấm đoán**  
Không được phép gây quỹ cho các mục đích mờ ám, đa cấp hoặc vi phạm pháp luật...

(vv)
`,
        },
    };

    const current = legalContent[type ?? ""] || null;

    if (!current) {
        return (
            <div className="p-6 max-w-3xl mx-auto text-center text-red-600">
                {t("legal.not-found") || "Tài liệu không tồn tại hoặc sai định dạng URL."}
            </div>
        );
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{current.title}</h1>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap text-gray-700">
                {current.body}
            </div>
        </div>
    );
}
