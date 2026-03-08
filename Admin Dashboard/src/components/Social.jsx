export default function Social({ socialInputs, setSocialInputs }) {
    return (
        <>
            <label className="input-label text-body-medium">
                Facebook Account
                <input
                    value={socialInputs.facebookAccount}
                    onChange={(event) =>
                        setSocialInputs((prev) => ({
                            ...prev,
                            facebookAccount: event.target.value,
                        }))
                    }
                    name="facebook-account"
                    type="text"
                    required
                    className="input"
                    placeholder="@warner"
                />
            </label>
            <label className="input-label text-body-medium">
                Instagram Account
                <input
                    value={socialInputs.instagramAccount}
                    onChange={(event) =>
                        setSocialInputs((prev) => ({
                            ...prev,
                            instagramAccount: event.target.value,
                        }))
                    }
                    name="instagram-account"
                    type="text"
                    required
                    className="input"
                    placeholder="@warner"
                />
            </label>
            <label className="input-label text-body-medium">
                LinkedIn Account
                <input
                    value={socialInputs.linkedinAccount}
                    onChange={(event) =>
                        setSocialInputs((prev) => ({
                            ...prev,
                            linkedinAccount: event.target.value,
                        }))
                    }
                    name="linkedin-account"
                    type="text"
                    required
                    className="input"
                    placeholder="@warner"
                />
            </label>
            <label className="input-label text-body-medium">
                Dribble Account
                <input
                    value={socialInputs.dribbleAccount}
                    onChange={(event) =>
                        setSocialInputs((prev) => ({
                            ...prev,
                            dribbleAccount: event.target.value,
                        }))
                    }
                    name="dribble-account"
                    type="text"
                    required
                    className="input"
                    placeholder="@warner"
                />
            </label>
            <label className="input-label text-body-medium">
                Behance Account
                <input
                    value={socialInputs.behanceAccount}
                    onChange={(event) =>
                        setSocialInputs((prev) => ({
                            ...prev,
                            behanceAccount: event.target.value,
                        }))
                    }
                    name="behance-account"
                    type="text"
                    required
                    className="input"
                    placeholder="@warner"
                />
            </label>
            <label className="input-label text-body-medium">
                UI8 Account
                <input
                    value={socialInputs.ui8Account}
                    onChange={(event) =>
                        setSocialInputs((prev) => ({
                            ...prev,
                            ui8Account: event.target.value,
                        }))
                    }
                    name="ui8-account"
                    type="text"
                    required
                    className="input"
                    placeholder="@warner"
                />
            </label>
        </>
    );
}
