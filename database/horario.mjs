import { METADATA } from "#db/metadata.mjs";

const HORARIO = {
  IDHORARIO: 'id_horario',
  IDUSUARIO: 'id_usuario',
  ID_DIA: 'id_dia',
  TIEMPO: 'tiempo',
  IDTURNO: 'id_turno',
  ESTATUS: 'estatus',
  LABORABLE: 'laborable',
  ...METADATA
};

export {
  HORARIO
};