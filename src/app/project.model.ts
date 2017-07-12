export class Project {
  public active: boolean = true;
  
  constructor (public name: string, public starters: string, public description: string, public goalAmount: number, public amountRaised: number, public backers: number, public plan: string, public rewards: string, public categories: string) { }

}
