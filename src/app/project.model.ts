export class Project {
  public active = true;

  constructor (public name: string, public starters: string, public description: string, public goalAmount: number, public amountRaised: number=0, public backers: string[]=null, public plan: string, public rewards: string, public categories: string) { }

}
