import type { Metadata } from "next";
import { Brain, Storefront, Student } from "@phosphor-icons/react/dist/ssr";
import { Compliance, CtaBand, InfoTable, PageIntro } from "@/components/blocks";
import { counselling, financeEducation, socialShop } from "@/content/site";

export const metadata: Metadata = {
  title: "Sản phẩm cộng đồng",
  description:
    "Tham vấn và hỗ trợ tâm lý, giáo dục tài chính và khởi nghiệp Chồi Xanh, cửa hàng xã hội thực hành: những dịch vụ đồng hành cùng khoản vay của Đơm Hoa.",
};

const products = [
  { id: counselling.id, icon: Brain, label: "Sản phẩm 1", title: counselling.title },
  { id: financeEducation.id, icon: Student, label: "Sản phẩm 2", title: `${financeEducation.title} (${financeEducation.name})` },
  { id: socialShop.id, icon: Storefront, label: "Sản phẩm 3", title: socialShop.title },
];

export default function CommunityPage() {
  return (
    <>
      <PageIntro
        title="Sản phẩm cộng đồng"
        body="Vốn, kiến thức và sự hỗ trợ tinh thần luôn đi cùng nhau, như người làm vườn kiên nhẫn chăm từng chồi non. Các dịch vụ dưới đây là tự nguyện và không ảnh hưởng đến việc xét vay."
      />

      <nav aria-label="Ba sản phẩm cộng đồng" className="container-site mt-10">
        <ul className="grid gap-4 md:grid-cols-3">
          {products.map(({ id, icon: Icon, label, title }) => (
            <li key={id}>
              <a href={`#${id}`} className="flex h-full items-start gap-4 rounded-[var(--radius-card)] bg-sprout p-6 transition-colors duration-200 hover:bg-[#dde6d5]">
                <Icon size={30} className="shrink-0 text-moss" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold text-blossom-deep">{label}</span>
                  <span className="mt-1 block font-bold text-moss-ink">{title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 1. Counselling */}
      <section id={counselling.id} className="container-site mt-24 scroll-mt-32" aria-labelledby="counselling-title">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 [&>*]:min-w-0">
          <div>
            <p className="text-[15px] font-semibold text-blossom-deep">Sản phẩm 1</p>
            <h2 id="counselling-title" className="mt-2 text-[32px] text-moss-ink md:text-[42px]">
              {counselling.title}
            </h2>
            <p className="mt-4 text-ink-muted">
              Tham gia tham vấn hoàn toàn tự nguyện, không ảnh hưởng đến việc xét vay. Hồ sơ tham vấn được lưu tách biệt khỏi hồ sơ tín dụng.
            </p>
          </div>
          <InfoTable rows={counselling.rows} caption={counselling.title} />
        </div>

        <h3 className="mt-14 text-[24px] text-moss-ink">Quy trình</h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counselling.steps.map((s, i) => (
            <li key={s.title} className="rounded-[var(--radius-card)] bg-paper p-6 ring-1 ring-sprout-line">
              <span className="tabular grid size-9 place-items-center rounded-full bg-moss text-[15px] font-bold text-on-dark" aria-hidden="true">
                {i + 1}
              </span>
              <h4 className="mt-4 text-[17px] font-bold text-moss-ink">{s.title}</h4>
              <p className="mt-1.5 text-[15px] text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Compliance items={counselling.compliance} />
        </div>
      </section>

      {/* 2. Financial education */}
      <section id={financeEducation.id} className="mt-24 scroll-mt-32 bg-sprout py-20" aria-labelledby="education-title">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 [&>*]:min-w-0">
            <div>
              <p className="text-[15px] font-semibold text-blossom-deep">Sản phẩm 2: {financeEducation.name}</p>
              <h2 id="education-title" className="mt-2 text-[32px] text-moss-ink md:text-[42px]">
                {financeEducation.title}
              </h2>
              <p className="mt-4 text-ink-muted">
                Học hỏi đồng đẳng trong nhóm nhỏ, với tình huống thực tế và bài tập lập sổ thu chi. Không bắt buộc học thêm để được vay ngoài buổi tập huấn đầu vào.
              </p>
            </div>
            <InfoTable rows={financeEducation.rows} caption={financeEducation.title} />
          </div>

          <h3 className="mt-14 text-[24px] text-moss-ink">Các học phần đề xuất</h3>
          <div className="mt-6 overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
            <table className="w-full min-w-[720px] text-left text-[15px]">
              <thead>
                <tr className="text-sm text-ink-muted">
                  <th scope="col" className="px-5 py-3 font-medium">Học phần</th>
                  <th scope="col" className="px-5 py-3 font-medium">Nội dung chính</th>
                  <th scope="col" className="px-5 py-3 font-medium">Thời lượng</th>
                  <th scope="col" className="px-5 py-3 font-medium">Hình thức</th>
                </tr>
              </thead>
              <tbody>
                {financeEducation.modules.map((m) => (
                  <tr key={m.name} className="border-t border-sprout-line align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-moss-ink">{m.name}</th>
                    <td className="px-5 py-4 text-ink-muted">{m.content}</td>
                    <td className="tabular whitespace-nowrap px-5 py-4 font-medium text-moss-ink">{m.length}</td>
                    <td className="px-5 py-4 text-ink-muted">{m.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Compliance items={financeEducation.compliance} />
          </div>
        </div>
      </section>

      {/* 3. Social shop */}
      <section id={socialShop.id} className="container-site mt-24 scroll-mt-32" aria-labelledby="shop-title">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 [&>*]:min-w-0">
          <div>
            <p className="text-[15px] font-semibold text-blossom-deep">Sản phẩm 3</p>
            <h2 id="shop-title" className="mt-2 text-[32px] text-moss-ink md:text-[42px]">
              {socialShop.title}
            </h2>
            <p className="mt-4 text-ink-muted">
              Thực hành trong một cửa hàng thật để có kinh nghiệm làm việc, rồi đi làm, vào doanh nghiệp đối tác gói Chung Vườn, hoặc tự kinh doanh với gói Nảy Mầm.
            </p>
          </div>
          <InfoTable rows={socialShop.rows} caption={socialShop.title} />
        </div>
        <div className="mt-8">
          <Compliance items={socialShop.compliance} />
        </div>
      </section>

      <CtaBand
        title="Chị không phải đi một mình."
        body="Đăng ký tư vấn để được giới thiệu lớp Chồi Xanh, buổi tham vấn hoặc chỗ thực hành phù hợp với chị."
        primary={{ href: "/lien-he#dang-ky", label: "Đăng ký tư vấn" }}
        secondary={{ href: "/san-pham/tai-chinh", label: "Xem sản phẩm tài chính" }}
      />
    </>
  );
}
