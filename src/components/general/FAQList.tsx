import { useEffect, useState, type FormEvent } from "react";
import { navigate } from "astro:transitions/client";

const initialQuestionsAnswers: Array<{ question: string; answer: string }> = [
  {
    question: "Kapan deadline pendaftaran Study In Saudi ?",
    answer:
      "7 Desember 2023, merupakan batas akhir/deadline pendaftaran Portal Study in Saudi 2023/2024.",
  },
  {
    question:
      "Apakah yang telah mendaftar pada periode lalu perlu untuk membuat akun baru ?",
    answer: `Tidak perlu, pendaftar di periode lalu dapat menggunakan email dan nomor paspor yang lama untuk
mengajukan pendaftaran baru.`,
  },
  {
    question: "Berapa kali pendaftaran dibuka ?",
    answer:
      "Satu kali dalam setahun, biasanya dibuka di bulan Safar ketika awal tahun ajaran baru.",
  },
  {
    question:
      "Apakah kampus di Arab Saudi menyediakan program bahasa Arab bagi yang belum mahir ?",
    answer: `Iya, sebagian besar kampus negeri di Arab Saudi menyediakan program persiapan bahasa Arab untuk
mahasiswa Internasional terkecuali di beberapa kampus seperti Universitas Taibah, Universitas Najran ataupun
Universitas Majma’ah.`,
  },
  {
    question: "Apakah SKCK bisa diganti dengan SKKB jika tidak ada ?",
    answer: `Tidak bisa, karena persyaratan wajib yang diminta ialah Surat Keterangan Kepolisian dari negara asal, kalau
mau dicoba silahkan semoga Allah mudahkan.`,
  },
  {
    question: "Apakah SKCK yang dikeluarkan harus untuk luar negeri ?",
    answer:
      "Tidak harus, SKCK yang dikeluarkan melalui Polsek/Polres bisa digunakan untuk mendaftar.",
  },
  {
    question:
      "Apakah surat keterangan lulus/transkrip rapot bisa digunakan sebagai pengganti ijazah untuk mendaftar ?",
    answer:
      "Tidak bisa, tetapi tidak ada salahnya mencoba, semoga Allah mudahkan.",
  },
  {
    question:
      "Apakah ada batasan kuota untuk penerima beasiswa Study In Saudi ?",
    answer:
      "Tidak ada, kuota penerima beasiswa dikembalikan kepada kebutuhan dari masing-masing kampus.",
  },
  {
    question: "Jika ingin mendaftar di fakultas umum, apakah tersedia ?",
    answer:
      "Iya tersedia, asalkan dapat melengkapi dokumen persyaratan yang diminta untuk fakultas umum.",
  },
  {
    question:
      "Apakah beasiswa yang diberikan oleh masing-masing kampus di Arab Saudi sama ?",
    answer: `Pada umumnya sama, hanya saja setiap kampus tentu memiliki perbedaan dalam penyediaan fasilitas kepada
para mahasiswanya.`,
  },
  {
    question:
      "Apakah benar persyaratan untuk menyertakan bukti mahram untuk pendaftar putri ditiadakan ?",
    answer: `Benar, salah satu poin yang telah dikonfirmasi pada saat peluncuran portal Study in Saudi di Riyadh, Senin 18
September 2023 bahwa pendaftar putri tidak lagi disyaratkan untuk menyertakan bukti mahram.`,
  },
  {
    question: "Apakah Study In Saudi dapat digunakan untuk mendaftar S2/S3 ?",
    answer:
      "Belum bisa, saat ini untuk pengajuan pendaftaran S2/S3 masih melalui portal dari masing-masing kampus.",
  },
  {
    question: "Jika usia melebihi 25 tahun untuk S1 ?",
    answer:
      "17-25 tahun, sesuai persyaratan untuk S1, tetapi tidak ada salahnya mencoba, semoga Allah mudahkan.",
  },
  {
    question:
      "Berapa lama menunggu pengumuman maqbul mabdai dari awal pendaftaran ?",
    answer: `Tidak ditentukan, tergantung dari kampus yang diajukan, beberapa teman-teman ada yang hanya 2-3 pekan
sudah mendapatkan status maqbul mabdai.`,
  },
  {
    question:
      "Bagaimana cara mengetahui status telah berubah menjadi maqbul mabdai ?",
    answer:
      "Bisa dicek melalui website, serta akan mendapatkan e-mail dari pihak kampus.",
  },
  {
    question:
      "Apakah yang telah mendapatkan status maqbul mabdai perlu mengajukan pendaftaran baru ?",
    answer: `Tidak Perlu, jika pendaftar telah dinyatakan maqbul mabdai maka cukup menunggu hingga status berubah
menjadi maqbul nihai.`,
  },
  {
    question:
      "Apakah yang belum mendapatkan status maqbul mabdai pasti tertolak ?",
    answer:
      "Ditunggu saja, selama status pendaftaran belum “tertolak” maka masih ada peluang untuk diterima.",
  },
  {
    question:
      "Bagaimana jika status pendaftaran telah berubah menjadi maqbul mabdai akan tetapi belum dapat e-mail ?",
    answer: `Ditunggu saja, bisa jadi pihak kementerian saat ini belum menerima pengajuan berkas sang pendaftar dari
kampus yang diajukan.`,
  },
  {
    question: "Apakah pendaftar dengan status maqbul mabdai pasti diterima ?",
    answer: `Kemungkinan besar, tetapi belum menjamin 100% diterima karena pihak kementerian Arab Saudi yang akan
memberikan keputusan akhir untuk penerimaan, dan agar pendaftar tidak meninggalkan aktifitasnya hingga jelas
status kelulusannya menjadi Qabul Nihai yang ditandai dengan terbitnya Calling Visa dan ‘Isyar Qabul.`,
  },
  {
    question: "Kapan perubahan status dari maqbul mabdai ke maqbul nihai ?",
    answer:
      "Belum diketahui, karena hingga saat ini belum ada dari pendaftar yang menerima status maqbul nihai.",
  },
  {
    question: "Apakah jika ingin mendaftar UIM harus melalui Study in Saudi ?",
    answer: `Iya, pendaftaran kampus UIM untuk tahun ini dan seterusnya akan dilakukan melalui portal Study in Saudi sesuai
dengan publikasi yang disampaikan di akun resmi UIM`,
  },
  {
    question:
      "Bagaimana cara untuk mengedit formulir pendaftaran yang telah disubmit ?",
    answer: `Bisa, bagian yang bisa dirubah hanya profil diri, meliputi identitas penerima beasiswa, data paspor, informasi
alamat dan kontak, data media sosial.`,
  },
  {
    question: "Bagaimana Kartu Identitas Orangtua yang sudah wafat ?",
    answer:
      "Akte Kematian, bisa digunakan untuk melengkapi dokumen identitas Orangtua.",
  },
  {
    question:
      "Apakah seluruh dokumen harus dilegalisir (Apostille) ketika mendaftar ?",
    answer:
      "Tidak perlu, hanya diperlukan pada saat pendaftar telah dinyatakan telah diterima/maqbul nihai.",
  },
];

const FAQList = () => {
  const [questionsAnswers, setQuestionsAnswers] = useState(
    initialQuestionsAnswers
  );
  const [searchVal, setSearchVal] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set("query", searchVal);

    navigate(`/faq?${params.toString()}`);
  };

  const handleReset = () => {
    navigate("/faq");
  };

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const query = params.get("query");

    if (query) {
      setQuestionsAnswers(
        initialQuestionsAnswers.filter(
          (v) => v.question.toLowerCase().search(query.toLowerCase()) > -1
        )
      );
      setSearchVal(query);
    }
  }, []);

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="search">Cari pertanyaan</label>
          <div className="flex gap-4">
            <input
              value={searchVal}
              type="text"
              id="search"
              name="search"
              className="border w-full px-3 py-1 text-md outline-pacamara-accent"
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[24px]"
              >
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
      {questionsAnswers.length === 0 && (
        <div className="flex flex-col items-center mt-12 gap-4">
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-pacamara-accent"
          >
            <ellipse
              opacity="0.1"
              cx="90"
              cy="174.6"
              rx="90"
              ry="5.4"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M128.927 29.4516C130.478 27.3408 133.446 26.8868 135.557 28.4374C137.667 29.988 138.121 32.9561 136.571 35.0668L130.795 42.929C129.244 45.0397 126.276 45.4938 124.166 43.9431C122.055 42.3925 121.601 39.4244 123.151 37.3137L128.927 29.4516ZM133.425 31.3386C132.917 30.9651 132.202 31.0745 131.828 31.5829L126.053 39.4451C125.679 39.9535 125.789 40.6684 126.297 41.0419C126.805 41.4154 127.52 41.306 127.894 40.7976L133.67 32.9354C134.043 32.427 133.934 31.7121 133.425 31.3386ZM43.4082 76.0359C43.4082 52.9805 62.0983 34.2905 85.1536 34.2905C108.209 34.2905 126.899 52.9805 126.899 76.0359C126.899 99.0913 108.209 117.781 85.1536 117.781C62.0983 117.781 43.4082 99.0913 43.4082 76.0359ZM85.1536 30.6905C60.1101 30.6905 39.8082 50.9923 39.8082 76.0359C39.8082 101.079 60.1101 121.381 85.1536 121.381C93.3864 121.381 101.107 119.187 107.762 115.352L113.648 121.238C113.479 123.739 114.351 126.297 116.263 128.209L134.425 146.371C137.939 149.885 143.638 149.885 147.152 146.371L151.068 142.455C154.583 138.94 154.583 133.241 151.068 129.727L132.907 111.565C130.995 109.653 128.436 108.781 125.934 108.95L120.91 103.926C126.919 96.2339 130.499 86.553 130.499 76.0359C130.499 50.9923 110.197 30.6905 85.1536 30.6905ZM122.032 110.139L118.575 106.683C116.273 109.192 113.692 111.441 110.882 113.381L114.836 117.335C115.22 116.673 115.696 116.049 116.263 115.481L120.179 111.565C120.746 110.999 121.37 110.523 122.032 110.139ZM105.966 70.586C106.855 70.1414 107.215 69.0602 106.771 68.171C106.326 67.2819 105.245 66.9215 104.356 67.3661L90.2329 74.4275C89.6231 74.7324 89.2379 75.3557 89.2379 76.0375C89.2379 76.7192 89.6231 77.3425 90.2329 77.6474L104.356 84.7088C105.245 85.1534 106.326 84.793 106.771 83.9039C107.215 83.0147 106.855 81.9335 105.966 81.4889L95.0628 76.0375L105.966 70.586ZM63.5348 68.171C63.0902 69.0602 63.4506 70.1414 64.3398 70.586L75.2427 76.0375L64.3398 81.4889C63.4506 81.9335 63.0902 83.0147 63.5348 83.9039C63.9794 84.793 65.0606 85.1534 65.9497 84.7088L80.0726 77.6474C80.6824 77.3425 81.0676 76.7192 81.0676 76.0375C81.0676 75.3557 80.6824 74.7324 80.0726 74.4275L65.9497 67.3661C65.0606 66.9215 63.9794 67.2819 63.5348 68.171ZM55.1768 76.0354C55.1768 59.4799 68.5977 46.059 85.1532 46.059C101.709 46.059 115.13 59.4799 115.13 76.0354C115.13 92.5909 101.709 106.012 85.1532 106.012C68.5977 106.012 55.1768 92.5909 55.1768 76.0354ZM85.1532 42.459C66.6094 42.459 51.5768 57.4917 51.5768 76.0354C51.5768 94.5791 66.6094 109.612 85.1532 109.612C103.697 109.612 118.73 94.5791 118.73 76.0354C118.73 57.4917 103.697 42.459 85.1532 42.459ZM148.918 46.8855C148.121 44.3903 145.453 43.0131 142.958 43.8093L133.664 46.775C131.169 47.5711 129.792 50.2393 130.588 52.7344C131.384 55.2295 134.052 56.6068 136.547 55.8106L145.841 52.8449C148.337 52.0487 149.714 49.3806 148.918 46.8855ZM144.053 47.2389C144.654 47.0471 145.296 47.3788 145.488 47.9798C145.68 48.5808 145.348 49.2235 144.747 49.4153L135.453 52.381C134.852 52.5728 134.209 52.241 134.018 51.64C133.826 51.039 134.158 50.3964 134.759 50.2046L144.053 47.2389ZM27.5301 102.825C25.0156 103.557 23.5712 106.19 24.3039 108.704C25.0366 111.219 27.669 112.663 30.1835 111.93L39.5496 109.201C42.0641 108.468 43.5085 105.836 42.7758 103.321C42.0431 100.807 39.4107 99.3625 36.8962 100.095L27.5301 102.825ZM27.7601 107.697C27.5836 107.091 27.9315 106.457 28.5372 106.281L37.9033 103.551C38.509 103.375 39.143 103.723 39.3195 104.329C39.496 104.934 39.1481 105.568 38.5425 105.745L29.1763 108.474C28.5707 108.651 27.9366 108.303 27.7601 107.697ZM37.052 127.582C34.9812 125.979 34.6025 123 36.2061 120.929L42.1792 113.216C43.7828 111.145 46.7614 110.767 48.8322 112.37C50.903 113.974 51.2817 116.952 49.6781 119.023L43.705 126.737C42.1014 128.807 39.1228 129.186 37.052 127.582ZM39.0524 123.134C38.6662 123.632 38.7574 124.35 39.2562 124.736C39.755 125.122 40.4724 125.031 40.8587 124.532L46.8318 116.819C47.218 116.32 47.1268 115.603 46.628 115.217C46.1293 114.83 45.4118 114.922 45.0255 115.42L39.0524 123.134Z"
              fill="currentColor"
            />
          </svg>
          <div className="flex flex-col gap-2">
            <span className="text-sm">
              Pertanyaan tidak ditemukan. Coba kata kunci lain
            </span>
            <button
              className="font-bold font-pacamara-space text-sm hover:text-pacamara-accent transition-all duration-300 dark:text-white dark:hover:text-pacamara-accent"
              onClick={handleReset}
            >
              Reset kata pencarian
            </button>
          </div>
        </div>
      )}
      {questionsAnswers.length > 0 && (
        <ul className="list-none !ps-0">
          {questionsAnswers.map((v) => {
            return (
              <li key={v.question}>
                <details>
                  <summary className="cursor-pointer">{v.question}</summary>
                  <span>{v.answer}</span>
                </details>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FAQList;
