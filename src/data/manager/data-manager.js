export class DataManager extends EventTarget {
  
  constructor(providerAll, providerByName) {
    super();
    this.providerAll = providerAll;
    this.providerByName = providerByName;

    this.characters = [];
    this.loading = false;
    this.error = "";
    this.inputValue = "";
  }

  async getAllCharacters() {
    this.error = "";
    this.loading = true;

    this.dispatchEvent(new CustomEvent("search-start"));

    try {
      const data = await this.providerAll.getAll();
      this.characters = this.mapCharacters(data);

      this.dispatchEvent(
        new CustomEvent("search-success", { detail: this.characters }),
      );
    } catch (ex) {
      this.error = "Ocurrio un error, trataremos de resolverlo pronto ";
      this.characters = [];

      this.dispatchEvent(
        new CustomEvent("search-error", { detail: this.error }),
      );
    } finally {
      this.loading = false;
    }
  }

  async getByName(name) {
    if (!name.toLowerCase().trim()) {
      this.error = "Input vacio";
      this.characters = [];
      this.loading = false;
      this.dispatchEvent(new CustomEvent("search-error", { detail: this.error }));
      return;
    } else {
      this.dispatchEvent(new CustomEvent("search-start"));

      this.inputValue = name.trim();
      this.error = "";
      this.loading = true;

      try {
        const data = await this.providerByName.getByName(this.inputValue);
        this.characters = this.mapCharacters(data);

        this.dispatchEvent(
          new CustomEvent("search-success", { detail: this.characters }),
        );
      } catch (ex) {
        this.error = "Ocurrio un error, trataremos de resolverlo pronto";
        this.dispatchEvent(
          new CustomEvent("search-error", { detail: this.error }),
        );
        this.characters = [];
      } finally {
        this.loading = false;
      }
    }
  }

  mapCharacters(characters) {
    return characters.map((ch) => ({
      id: ch.id,
      name: ch.name,
      species: ch.species,
      image: ch.image,
      status: this.mapStatus(ch.status),
      statusRaw: ch.status,
      lastKnownLocation: ch.location?.name || "unknown",
      firstSeenIn: ch.origin?.name || "unknown",
    }));
  }

  mapStatus(status) {
    if (status === "Alive") return "🟢 Alive";
    if (status === "Dead") return "🔴 Dead";
    return "⚪ Unknown";
  }
}
