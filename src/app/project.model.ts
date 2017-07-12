export class Project {
  public active: boolean = true;

  constructor (public name: string, public starters: string, public description: string, public goalAmount: number, public amountRaised: number, public backers: string[], public plan: string, public rewards: string, public categories: string) { }

}
