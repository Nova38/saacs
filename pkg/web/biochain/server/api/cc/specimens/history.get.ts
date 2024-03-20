import { z } from 'zod'
import { ccbio, common } from 'saacs'

const querySchema = z.object({
  collectionId: z.string(),
  showHidden: z.boolean().optional(),
  specimenId: z.string(),
})

export default defineEventHandler(async (event) => {
  const cc = await useChaincode(event)

  const r = await getValidatedQuery(event, body =>
    querySchema.safeParse(body))
  if (!r.success)
    throw r.error.issues
  // console.log({ data: r.data });

  // const r = bodySchema.parse(b);
  // console.log(r);

  const result = await cc.service.getHistory(
    new common.generic.GetHistoryRequest({
      key: {
        collectionId: r.data.collectionId,
        itemKeyParts: [r.data.specimenId],
        itemType: ccbio.Specimen.typeName,
      },
    }),
  )

  // console.log(result.toJsonString({ typeRegistry: GlobalRegistry }));
  const history = new ccbio.SpecimenHistory({})

  if (!result.history)
    return { results: [] }

  for (const item of result.history.entries) {
    const s = new ccbio.Specimen()
    item.value?.unpackTo(s)

    history.entries.push(
      new ccbio.SpecimenHistoryEntry({
        ...item,
        value: s,
      }),
    )
  }

  // console.log({ history });
  return history
})