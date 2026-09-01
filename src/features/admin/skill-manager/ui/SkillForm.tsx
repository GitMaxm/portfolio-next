'use client'

import { SKILL_LEVELS, SkillIcon } from "@/entities/main/skill"
import { FormField } from "@/shared/ui/admin"

import type { ISkillFormProps } from "../model/types"
import { useSkillForm } from "../model/useSkillForm"
import styles from './SkillForm.module.scss'

export const SkillForm = ({ skill, mode = 'edit' }: ISkillFormProps) => {
  const {
    isCreate,
    isSubmitting,
    iconPath,
    iconViewBox,
    iconColor,
    handleIconPathChange,
    handleIconColorChange,
    handleFormSubmit,
    handleCancelClick,
  } = useSkillForm(skill, mode)

  const submitLabel = isCreate ? 'Создать' : 'Сохранить'
  const pendingLabel = isCreate ? 'Создание…' : 'Сохранение…'

  return (
    <form className={styles.form} onSubmit={handleFormSubmit} aria-busy={isSubmitting}>
      {!isCreate && (
        <FormField label="ID">
          <span className={styles.idDisplay}>{skill?.id}</span>
        </FormField>
      )}

      <FormField htmlFor="s-name" label="Название">
        <input
          id="s-name"
          name="name"
          type="text"
          required
          placeholder="Например, React"
          defaultValue={skill?.name ?? ''}
        />
      </FormField>

      <FormField htmlFor="s-level" label="Уровень">
        <select
          id="s-level"
          name="level"
          defaultValue={skill?.level ?? 'базовый'}
        >
          {SKILL_LEVELS.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </FormField>

      <FormField htmlFor="s-desc" label="Описание">
        <textarea
          id="s-desc"
          name="description"
          required
          placeholder="Что именно вы умеете в этой технологии"
          defaultValue={skill?.description ?? ''}
        />
      </FormField>

      <FormField htmlFor="s-icon" label="Иконка">
        <p className={styles.hint}>
          Нажмите на иконку на <a
            href="https://simpleicons.org/"
            target="_blank"
            rel="noopener noreferrer"
          >simpleicons.org</a> и вставьте сюда скопированный SVG целиком —
          путь извлечётся сам. Там же копируется фирменный цвет бренда.
          Иконки этого набора распространяются под лицензией CC0.
        </p>

        <div className={styles.iconRow}>
          <div className={styles.iconFields}>
            <textarea
              id="s-icon"
              className={styles.iconPath}
              required
              placeholder='Вставьте <svg>…</svg> или строку пути'
              value={iconPath}
              onChange={handleIconPathChange}
            />

            <label className={styles.colorField}>
              Цвет
              <input
                type="color"
                value={iconColor}
                onChange={handleIconColorChange}
              />
              <span className={styles.colorValue}>{iconColor}</span>
            </label>
          </div>

          <div className={styles.iconPreview}>
            <span className={styles.previewLabel}>Предпросмотр</span>
            {iconPath
              ? <SkillIcon path={iconPath} color={iconColor} viewBox={iconViewBox} size={64}/>
              : <span className={styles.previewEmpty}>—</span>
            }
          </div>
        </div>
      </FormField>

      <div className={styles.actions}>
        <button type="submit" className={styles.btnSave} disabled={isSubmitting}>
          {isSubmitting ? pendingLabel : submitLabel}
        </button>
        <button
          type="button"
          className={styles.btnCancel}
          onClick={handleCancelClick}
          disabled={isSubmitting}
        >
          Отмена
        </button>
      </div>
    </form>
  )
}
