import { EventEmitter } from "events";
import { OMDBData } from "../../modules/videos/entities/OMDbData";
import { OMDbDataCacheRepository } from "../../modules/videos/repositories/implementation/OMDbDataCacheRepository";

const newCacheAll = Symbol("newCacheAll");

export class EventCreateCache {
  emitter: EventEmitter;
  oMDbDataCacheRepository: OMDbDataCacheRepository;
  private static INSTANCE: EventCreateCache;

  private constructor() {
    this.emitter = new EventEmitter();
    this.oMDbDataCacheRepository = OMDbDataCacheRepository.getInstance();
  }

  public static getInstance(): EventCreateCache {
    if (!EventCreateCache.INSTANCE) {
      EventCreateCache.INSTANCE = new EventCreateCache();
    }

    return EventCreateCache.INSTANCE;
  }

  emmitAll(payload: OMDBData) {
    this.emitter.emit(newCacheAll, payload);
  }

  watchAll() {
    this.emitter.on(newCacheAll, async (data: OMDBData) => {
      await this.oMDbDataCacheRepository.create(data);
    });
  }
}
