// src/Component/LivreDePaie/LivreDePaie.jsx
import { useState } from "react";
import { saveToSheet, getSheetData } from "../../utils/sheetsHelper.js";
import "./LivreDePaie.css";

const LivreDePaie = () => {
  const [formData, setFormData] = useState({
    bulletinNumber: "",
    period: "",
    fullName: "",
    employment: "",
    birthDate: "",
    entryDate: "",
    cnssNumber: "",
    familySituation: "",
    deductions: "",
    paidPeriod: "",
    hN: "",
    hs1: "",
    hs2: "",
    hs3: "",
    total: "",
    workDays: "",
    workHours: "",
    grossBaseSalary: "",
    bonuses: "",
    seniority: "",
    vide1: "",
    vide2: "",
    taxableBenefits: "",
    vide3: "",
    vide4: "",
    grossSalary: "",
    toDeduct: "",
    maxRetirement: "",
    vide5: "",
    taxableSalary: "",
    taxabl: "",
    cnssDeduction: "",
    amoDeduction: "",
    tax: "",
    dive6: "",
    Total: "",
    netSalary: "",
    nonTaxableBonuses: "",
    vide7: "",
    vide8: "",
    adva: "",
    advances: "",
    dirhamsBenefits: "",
    netPaidDirhams: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await saveToSheet(formData);
  //     alert('Data saved successfully to Google Sheets!');
  //     // Clear form after successful submission
  //     setFormData({
  //       bulletinNumber: '',
  //       period: '',
  //       fullName: '',
  //       employment: '',
  //       birthDate: '',
  //       entryDate: '',
  //       cnssNumber: '',
  //       familySituation: '',
  //       deductions: '',
  //       paidPeriod: '',
  //       hN: '',
  //       hs1: '',
  //       hs2: '',
  //       hs3: '',
  //       total: '',
  //       workDays: '',
  //       workHours: '',
  //       grossBaseSalary: '',
  //       bonuses: '',
  //       seniority: '',
  //       vide1: '',
  //       vide2: '',
  //       taxableBenefits: '',
  //       vide3: '',
  //       vide4: '',
  //       grossSalary: '',
  //       toDeduct: '',
  //       maxRetirement: '',
  //       vide5: '',
  //       taxableSalary: '',
  //       taxabl: '',
  //       cnssDeduction: '',
  //       amoDeduction: '',
  //       tax: '',
  //       dive6: '',
  //       Total: '',
  //       netSalary: '',
  //       nonTaxableBonuses: '',
  //       vide7: '',
  //       vide8: '',
  //       adva: '',
  //       advances: '',
  //       dirhamsBenefits: '',
  //       netPaidDirhams: '',
  //     });
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //     alert('Error saving data');
  //   }
  // };

  // const handleExport = async () => {
  //   try {
  //     const data = await getSheetData();
  //     const workbook = XLSX.utils.book_new();
  //     const worksheet = XLSX.utils.json_to_sheet(data);
  //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Livre De Paie');
  //     XLSX.writeFile(workbook, 'livre_de_paie.xlsx');
  //   } catch (error) {
  //     console.error('Error exporting data:', error);
  //     alert('Error exporting to Excel');
  //   }
  // };

  const handleDownload = async () => {
    try {
      // Replace with your Google Sheet URL
      const sheetId = '1JBROV0LadFyX6_lC6UyZk_Sjhyg39T1QVcVg9Kk31P8';  // Your sheet ID here
      const exportUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;
      
      // Create temporary link and trigger download
      const link = document.createElement('a');
      link.href = exportUrl;
      link.target = '_blank';
      link.download = 'livre_de_paie.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download file. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Note the 'livre' parameter to specify which sheet to use
      await saveToSheet('livre',formData);
      alert("Data saved successfully to Google Sheets!");
      // Clear form after successful submission
      setFormData({
        bulletinNumber: "",
        period: "",
        fullName: "",
        employment: "",
        birthDate: "",
        entryDate: "",
        cnssNumber: "",
        familySituation: "",
        deductions: "",
        paidPeriod: "",
        hN: "",
        hs1: "",
        hs2: "",
        hs3: "",
        total: "",
        workDays: "",
        workHours: "",
        grossBaseSalary: "",
        bonuses: "",
        seniority: "",
        vide1: "",
        vide2: "",
        taxableBenefits: "",
        vide3: "",
        vide4: "",
        grossSalary: "",
        toDeduct: "",
        maxRetirement: "",
        vide5: "",
        taxableSalary: "",
        taxabl: "",
        cnssDeduction: "",
        amoDeduction: "",
        tax: "",
        dive6: "",
        Total: "",
        netSalary: "",
        nonTaxableBonuses: "",
        vide7: "",
        vide8: "",
        adva: "",
        advances: "",
        dirhamsBenefits: "",
        netPaidDirhams: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data: " + error.message);
    }
  };

  const getLabel = (key, language) => {
    const labels = {
      bulletinNumber: {
        arabic: "رقم بيان الرواتب",
        french: "N ° du Bulletin de Paie",
      },
      period: { arabic: "المدة", french: "PERIODE" },
      fullName: { arabic: "الاسم العائلي والشخصي", french: "NOM ET PRENOMS" },
      employment: { arabic: "الشغل", french: "EMPLOI" },
      birthDate: { arabic: "تاريخ الازدياد", french: "Date de naissance" },
      entryDate: {
        arabic: "تاريخ الالتحاق بالعمل",
        french: "Date d'entrée en service",
      },
      cnssNumber: { arabic: "رقم ص.و.ض.ج", french: "Numéro de la C.N.S.S" },
      familySituation: {
        arabic: "الوضع العائلي",
        french: "Situation de famille",
      },
      deductions: { arabic: "الاقتطاعات", french: "Déductions" },
      hN: { arabic: " س.ع.", french: "H.N." },
      hs1: { arabic: " س.ا", french: "H.S.%" },
      hs2: { arabic: " س.ا", french: "H.S.%" },
      hs3: { arabic: " س.ا", french: "H.S.%" },
      total: { arabic: "المجموع", french: "Total" },
      workDays: { arabic: "أيام العمل", french: "des jours de travail" },
      workHours: { arabic: "ساعات العمل", french: "des heures de travail" },
      grossBaseSalary: {
        arabic: "الرواتب الإجمالي الأساسي",
        french: "Salaire brut de base",
      },
      bonuses: { arabic: "تضاف مكافآت", french: "A AJOUTER(primes)" },
      seniority: { arabic: "الأقدمية", french: "Ancienneté (....%)" },
      taxableBenefits: {
        arabic: "  تضاف منافع مادية خاضعة للضرائب  ",
        french: " A AJOUTER Avantages en nature imposables",
      },
      grossSalary: { arabic: "الراتب الإجمالي", french: "SALAIRE BRUT" },
      toDeduct: { arabic: "تخصم", french: "A DEDUIRE" },
      maxRetirement: {
        arabic: "التقاعد الحد الأقصى %",
        french: "Retraite limite...%",
      },
      taxableSalary: {
        arabic: "الرواتب الخاضعة للضريبة",
        french: "SALAIRE IMPOSABLE",
      },
      taxabl: { arabic: "تخصم ", french: "A DEDUIRE" },
      cnssDeduction: {
        arabic: "ص.و.ض.ج%4.29 الحد الأدنى 6000درهم ",
        french: "C.N.S.S 4.29% (Plafond 6000DH)",
      },
      amoDeduction: { arabic: "ت.ا.م. 2%", french: "A.M.O 2%" },
      tax: { arabic: "الضريبة حسب الجدول", french: "Impôts selon barème" },
      Total: { arabic: "المجموع", french: "TOTAL" },
      netSalary: {
        arabic: "الراتب الصافي للدفع (بالدرهم)",
        french: "SALAIRE NET A PAYER (en dirhams)",
      },
      nonTaxableBonuses: {
        arabic:
          "تضاف المكافئات , التعويضات  أو دفع المصاريف غير الخاضعة للضريبة ",
        french:
          "A AJOUTER Primes indemnités ou remb de frais non soumis à imp.",
      },
      advances: { arabic: "التسبيقات", french: "AVANCES" },
      dirhamsBenefits: { arabic: "المنافع", french: "Avantages (en dirhams)" },
      netPaidDirhams: {
        arabic: "المدفوع الصافي (بالدرهم)",
        french: "NET PAYER (en dirhams)",
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
              Informations Personnelles et Professionnelles
            </span>
            <span className="arabic-legend">المعلومات الشخصية والمهنية</span>
          </div>
        </legend>
        {[
          "bulletinNumber",
          "period",
          "fullName",
          "employment",
          "birthDate",
          "entryDate",
          "cnssNumber",
          "familySituation",
          "deductions",
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

      {/* Personal and Service Details Section */}
      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">
              PERIODE PAYEE(Heures et jours)
            </span>
            <span className="arabic-legend">
              {" "}
              المدة المستأجرة (الساعات و الايام){" "}
            </span>
          </div>
        </legend>
        {["hN", "hs1", "hs2", "hs3"].map((field) => (
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
        <fieldset className="fieldset-group">
          <legend className="black-legend">
            <div className="legend-text">
              <span className="french-legend">Total</span>
              <span className="arabic-legend"> المجموع </span>
            </div>
          </legend>
          {["workDays", "workHours"].map((field) => (
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
      </fieldset>

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Salaire brut de base</span>
            <span className="arabic-legend">الرواتب الإجمالي الأساسي </span>
          </div>
        </legend>
        {["grossBaseSalary"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">A AJOUTER(primes)</span>
            <span className="arabic-legend"> تضاف مكافآت</span>
          </div>
        </legend>
        {["seniority", "vide1", "vide2"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">
              A AJOUTER Avantages en nature imposables
            </span>
            <span className="arabic-legend">
              {" "}
              تضاف منافع مادية خاضعة للضرائب{" "}
            </span>
          </div>
        </legend>
        {["vide3", "vide4"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">Salaire brut</span>
            <span className="arabic-legend"> الراتب الإجمالي</span>
          </div>
        </legend>
        {["grossSalary"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">A DEDUIRE</span>
            <span className="arabic-legend"> تخصم'</span>
          </div>
        </legend>
        {["maxRetirement", "vide5"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">SALAIRE IMPOSABLE</span>
            <span className="arabic-legend"> الرواتب الخاضعة للضريبة</span>
          </div>
        </legend>
        {["taxableSalary"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">A DEDUIRE</span>
            <span className="arabic-legend"> تخصم </span>
          </div>
        </legend>
        {["cnssDeduction", "amoDeduction", "tax", "vide6", "Total"].map(
          (field) => (
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
          )
        )}
      </fieldset>

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">
              SALAIRE NET A PAYER (en dirhams)
            </span>
            <span className="arabic-legend">
              الراتب الصافي للدفع (بالدرهم){" "}
            </span>
          </div>
        </legend>
        {["netSalary"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">
              A AJOUTER Primes indemnités ou remb de frais non soumis à imp.
            </span>
            <span className="arabic-legend">
              تضاف المكافئات , التعويضات أو دفع المصاريف غير الخاضعة للضريبة{" "}
            </span>
          </div>
        </legend>
        {["vide7", "vide8"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">A DEDUIRE</span>
            <span className="arabic-legend"> 'تخصم</span>
          </div>
        </legend>
        {["advances", "dirhamsBenefits"].map((field) => (
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

      <fieldset className="fieldset-group">
        <legend className="black-legend">
          <div className="legend-text">
            <span className="french-legend">NET PAYER (en dirhams)</span>
            <span className="arabic-legend">المدفوع الصافي (بالدرهم) </span>
          </div>
        </legend>
        {["netPaidDirhams"].map((field) => (
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

      <button type="submit">SUBMIT</button>
      <button type="button"  className="export-excel" onClick={handleDownload}>
        EXPORT EXCEL
      </button>
    </form>
  );
};

export default LivreDePaie;
