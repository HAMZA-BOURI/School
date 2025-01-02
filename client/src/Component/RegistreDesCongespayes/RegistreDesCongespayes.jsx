import React, { useState } from "react";
import "./RegistreDesCongespayes.css";
import { saveToSheet, getSheetData } from "../../utils/sheetsHelper.js";

const RegistreDesCongesPayes = () => {
  const [formData, setFormData] = useState({
    matriculeCNSS: "",
    carteCarnet: "",
    dorder: "",
    prenomNom: "",
    dateNaissanceAge: "",
    qualificationProfessionnelle: "",
    dateEntreeService: "",
    dateDepartConge: "",
    dateRetourConge: "",
    joursPayes: "",
    indemnitesJournalieres: "",
    indemnitesAvantages: "",
    indemnitesTotales: "",
    dateVersements: "",
    congesReportes: "",
    signatureInteresse: "",
    observations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDownload = async () => {
    try {
      // Replace with your Google Sheet URL
      const sheetId = "1nhcZt4uG6AGgS8_oe47zxwGDfJgy3KFLONiqj5rI9Bo"; // Your sheet ID here
      const exportUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;

      // Create temporary link and trigger download
      const link = document.createElement("a");
      link.href = exportUrl;
      link.target = "_blank";
      link.download = "livre_de_paie.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Note the 'regis' parameter to specify which sheet to use
      await saveToSheet('conges',formData);
      alert("Data saved successfully to Google Sheets!");
      // Clear form after successful submission
      setFormData({
        matriculeCNSS: "",
        carteCarnet: "",
        dorder: "",
        prenomNom: "",
        dateNaissanceAge: "",
        qualificationProfessionnelle: "",
        dateEntreeService: "",
        dateDepartConge: "",
        dateRetourConge: "",
        joursPayes: "",
        indemnitesJournalieres: "",
        indemnitesAvantages: "",
        indemnitesTotales: "",
        dateVersements: "",
        congesReportes: "",
        signatureInteresse: "",
        observations: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data: " + error.message);
    }
  };
  const getLabel = (key, language) => {
    const labels = {
      matriculeCNSS: {
        arabic: "عدد التسجيل بالصندوق الوطني للضمان الاجتماعي:",
        french: "N° matricule C.N.S.S:",
      },
      carteCarnet: {
        arabic: "رقم وتاريخ بطاقة أو كناش التعريف:(ب)",
        french: "N° et date de la carte ou du carnet d'identité (b): ",
      },
      dorder: { arabic: "العدد الترتيبي:(آ)", french: "N° D'ORDRE(a):" },
      prenomNom: {
        arabic: "لقب الأجير واسمه:",
        french: "PRENOM ET NOM DU SALARIE:",
      },
      dateNaissanceAge: {
        arabic: "تاريخ الازدياد وان تعذر الآمر مبلغ العمر:",
        french: "Date de naissance ou, en cas d'impossibilité, âge:",
      },
      qualificationProfessionnelle: {
        arabic: "صنف الخدمة:",
        french: "QUALIFICATION PROFESSIONNELLE:",
      },
      dateEntreeService: {
        arabic: "تاريخ الدخول إلى الخدمة:",
        french: "DATE D'ENTREE EN SERVICE:",
      },
      dateDepartConge: {
        arabic: "تاريخ ابتداء الرخصة:",
        french: "DATE DEPART EN CONGE:",
      },
      dateRetourConge: {
        arabic: "تاريخ الرجوع من الرخصة:",
        french: "DATE RETOUR DE CONGE :",
      },
      joursPayes: {
        arabic: "عدد الأيام المؤداة عنها الأجرة:",
        french: "Nombre de jours payés:",
      },
      indemnitesJournalieres: {
        arabic: "تعويضات يومية:",
        french: "Indemnités journalières:",
      },
      indemnitesAvantages: {
        arabic: "تعويضات فوائد تابعة تحتوي على:",
        french: "Indemnités basées sur avantages accessoires:",
      },
      indemnitesTotales: {
        arabic: "مجموع التعويضات:",
        french: "Indemnités totales:",
      },
      dateVersements: {
        arabic: "تاريخ الأداء أو الأداءات:",
        french: "Date du ou des versements:",
      },
      congesReportes: {
        arabic: "رخصة وقع تأخيرها بالاتفاق مع السيد (الاسم):",
        french: "CONGES REPORTE D'ACCORD AVEC M...(nom):",
      },
      signatureInteresse: {
        arabic: "توقيع المعني به:",
        french: "SIGNATURE DE l'INTERESSE:",
      },
      observations: {
        arabic:
          "ملاحظات عند الاقتضاء تاريخ الخروج من المؤسسة وسبب الخروج في حالة الوفاة اسم وصفة وصوات المستحق أو المستحقين الذين دفع لهم التعويض",
        french:
          "OBSERVATIONS Le cas échéant, date de sortie de l'établissement, motif du départ. En cas de décès, nom, qualité et adresse du ou des ayants droit ayant perçu l'indemnité:",
      },
    };

    return labels[key] ? labels[key][language] : key;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {/* Personal and Service Details Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">
              Détails personnels et de service
            </span>
            <span className="arabic-legend">تفاصيل شخصية وخدمية</span>
          </div>
        </legend>
        {[
          "matriculeCNSS",
          "carteCarnet",
          "dorder",
          "prenomNom",
          "dateNaissanceAge",
          "qualificationProfessionnelle",
          "dateEntreeService",
        ].map((field) => (
          <div className="form-group" key={field}>
            <label>
              <div className="label-text">
                <span className="french-label">
                  {getLabel(field, "french")}
                </span>
                <span className="arabic-label">
                  {getLabel(field, "arabic")}
                </span>
              </div>
              <input
                type={field === "dateEntreeService" ? "date" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
      </fieldset>

      {/* Leave Dates Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Congé Annuel</span>
            <span className="arabic-legend">الرخصة السنوية</span>
          </div>
        </legend>
        {["dateDepartConge", "dateRetourConge"].map((field) => (
          <div className="form-group" key={field}>
            <label>
              <div className="label-text">
                <span className="french-label">
                  {getLabel(field, "french")}
                </span>
                <span className="arabic-label">
                  {getLabel(field, "arabic")}
                </span>
              </div>
              <input
                type="date"
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
      </fieldset>

      {/* Paid Days Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Jours Payés</span>
            <span className="arabic-legend">الأيام المؤداة عنها الأجرة</span>
          </div>
        </legend>
        <div className="form-group">
          <label>
            <div className="label-text">
              <span className="french-label">
                {getLabel("joursPayes", "french")}
              </span>
              <span className="arabic-label">
                {getLabel("joursPayes", "arabic")}
              </span>
            </div>
            <input
              type="text"
              name="joursPayes"
              value={formData.joursPayes}
              onChange={handleChange}
            />
          </label>
        </div>
      </fieldset>

      {/* Indemnities and Payments Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Indemnités et Versements</span>
            <span className="arabic-legend">التعويضات والمدفوعات</span>
          </div>
        </legend>
        {[
          "indemnitesJournalieres",
          "indemnitesAvantages",
          "indemnitesTotales",
          "dateVersements",
        ].map((field) => (
          <div className="form-group" key={field}>
            <label>
              <div className="label-text">
                <span className="french-label">
                  {getLabel(field, "french")}
                </span>
                <span className="arabic-label">
                  {getLabel(field, "arabic")}
                </span>
              </div>
              {field === "dateVersements" ? (
                <input
                  type="date"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              )}
            </label>
          </div>
        ))}
      </fieldset>

      {/* Congés Reportés Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Congés Reportés</span>
            <span className="arabic-legend">تعويضات عن الرخص المجموعة</span>
          </div>
        </legend>
        <div className="form-group">
          <label>
            <div className="label-text">
              <span className="french-label">
                {getLabel("congesReportes", "french")}
              </span>
              <span className="arabic-label">
                {getLabel("congesReportes", "arabic")}
              </span>
            </div>
            <input
              type="text"
              name="congesReportes"
              value={formData.congesReportes}
              onChange={handleChange}
            />
          </label>
        </div>
      </fieldset>

      {/* Signature Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Signature</span>
            <span className="arabic-legend">الإمضاء</span>
          </div>
        </legend>
        <div className="form-group">
          <label>
            <div className="label-text">
              <span className="french-label">
                {getLabel("signatureInteresse", "french")}
              </span>
              <span className="arabic-label">
                {getLabel("signatureInteresse", "arabic")}
              </span>
            </div>
            <input
              type="text"
              name="signatureInteresse"
              value={formData.signatureInteresse}
              onChange={handleChange}
            />
          </label>
        </div>
      </fieldset>

      {/* Observations Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Observations</span>
            <span className="arabic-legend">ملاحظات</span>
          </div>
        </legend>
        <div className="form-group">
          <label>
            <div className="label-text">
              <span className="french-label">
                {getLabel("observations", "french")}
              </span>
              <span className="arabic-label">
                {getLabel("observations", "arabic")}
              </span>
            </div>
            <textarea
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              className="fixed-size-textarea"
            />
          </label>
        </div>
      </fieldset>

      <button type="submit">SUBMIT</button>
      <button type="button"  className="export-excel" onClick={handleDownload}>
        EXPORT EXCEL
      </button>
    </form>
  );
};

export default RegistreDesCongesPayes;
