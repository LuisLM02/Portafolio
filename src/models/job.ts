export class Job {

  job: string = '';
  company: string = '';
  initDate: Date = new Date();
  endDate: Date = new Date();
  technologies: string[] = [];
  activities: string[] = [];

  constructor(init: Partial<Job>) {

    Object.assign(this, init);
    
  }

  /**
   * get a initData and endDate as text
   * @returns {string} init and end date in this format: "Enero 2022 - Febrero 2023"
   */
  public getDates(): string {

    let date: string = "";

    date += this.getMonthName(this.initDate.getMonth()) + " " + this.initDate.getFullYear();

    if (!this.endDate) {
      date += " - Actualmente";
      return date;
    }

    date += " - " + this.getMonthName(this.endDate.getMonth()) + " " + this.endDate.getFullYear();

    return date;

  }

  /**
   * get a number in spanish
   * @param {number} month month number (0 to 11) 
   * @returns {string} month in spanish
   */
  private getMonthName(month: number): string {

    const MONTHS: Map<number, string> = new Map([
      [0, 'Enero'],
      [1, 'Febrero'],
      [2, 'Marzo'],
      [3, 'Abril'],
      [4, 'Mayo'],
      [5, 'Junio'],
      [6, 'Julio'],
      [7, 'Agosto'],
      [8, 'Septiembre'],
      [9, 'Octubre'],
      [10, 'Noviembre'],
      [11, 'Diciembre']

    ]);

    let monthName = MONTHS.get(month);

    if (!monthName) return "";

    return monthName;

  }

  /**
   * get tecnologies as text
   * @returns {string} tecnologies in this format: "item1, item2, item3, ..."
   */
  public getTecnologies(): string {

    let tecnologies: string = "";

    for (const tecnology of this.technologies) {
      tecnologies += tecnology + ", ";
    }

    return tecnologies;

  }

}
