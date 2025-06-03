import React from "react";
import StepCard from "../common/StepCard";
import SectionHeader from "../common/SectionHeader";

const Step = () => {
  return (
    <div id="step" className="mb-26 font-vietnam max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        highlight={"Panduan"}
        rest={"Wakaf, infaq \n shodaqoh."}
        description={
          "Berikut adalah Cara melakukan wakaq, infaq shodaqoh untuk membantu pembangunan masjid besar SMK Bogor"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <StepCard
          number={"01"}
          title={"Isi Form Data Diri"}
          description={
            "Isikan form pengisian yang disediakan di form data diri, isikan dengan data diri anda dengan teliti."
          }
          index={0}
        />
        <StepCard
          number={"02"}
          title={"Isikan Nominal Shodaqoh"}
          description={
            "Isikan nominal yang akan anda shodaqohkan, pastikan isi nominal dengan seiklasnya tanpa ada paksaan apapun."
          }
          index={1}
        />
        <StepCard
          number={"03"}
          title={"Upload Bukti Pembayaran"}
          description={
            "Pilih motode pembayaran dan upload bukti pembayaranya."
          }
          index={2}
        />
        <StepCard
          number={"04"}
          title={"Verifikasi Pembayaran"}
          description={
            "Pembayaran anda akan di verifikasi oleh admin dan jika terverifikasi nama anda akan tampil."
          }
          index={3}
        />
      </div>
    </div>
  );
};

export default Step;
