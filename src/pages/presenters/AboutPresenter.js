import data from "../../models/teamProfile.js"
export class AboutPresenter {
  constructor(view) {
    this.view = view;
  }

  async loadTeamProfile() {
    try {
      const dataTeamProfile = await data.getTeamProfile();
      this.view.setTeamProfile(dataTeamProfile);
    } catch (error) {
      console.log(error);
    }
  }
}
