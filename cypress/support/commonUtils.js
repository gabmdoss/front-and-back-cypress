class commonUtils {
    dataAtual() {
        const date = new Date();
        
        const day = String(date.getDate()).padStart(2, '0');       // "28" (DD)
        const month = String(date.getMonth() + 1).padStart(2, '0'); // "02" (MM)
        const year = date.getFullYear();                          // "2025" (AAAA)
        
        return `${day}${month}${year}`; // Formato final: "28022025"
      }
}
export default new commonUtils()