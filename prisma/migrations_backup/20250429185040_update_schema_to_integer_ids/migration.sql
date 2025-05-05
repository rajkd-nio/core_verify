-- CreateTable
CREATE TABLE "document_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "document_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_titles" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "shareable" BOOLEAN NOT NULL DEFAULT false,
    "document_type_id" INTEGER NOT NULL,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "require_number" BOOLEAN NOT NULL DEFAULT false,
    "require_valid_date" BOOLEAN NOT NULL DEFAULT false,
    "require_expire_date" BOOLEAN NOT NULL DEFAULT false,
    "require_doc_data" BOOLEAN NOT NULL DEFAULT false,
    "doc_data_options" JSONB,
    "doc_data_name" TEXT,
    "require_attachment_front" BOOLEAN NOT NULL DEFAULT false,
    "require_attachment_back" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "document_titles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_fields" (
    "id" SERIAL NOT NULL,
    "field_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "placeholder" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "full_width" BOOLEAN NOT NULL DEFAULT true,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "default_value" TEXT,
    "options" JSONB,
    "validation" JSONB,
    "conditional_display" JSONB,
    "help_text" TEXT,
    "document_type_id" INTEGER NOT NULL,
    "document_title_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "document_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_configurations" (
    "id" SERIAL NOT NULL,
    "region_id" INTEGER NOT NULL,
    "document_type_id" INTEGER NOT NULL,
    "document_title_id" INTEGER NOT NULL,
    "type_of_condition" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "document_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'US',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "document_types_name_key" ON "document_types"("name");

-- CreateIndex
CREATE INDEX "document_titles_document_type_id_idx" ON "document_titles"("document_type_id");

-- CreateIndex
CREATE INDEX "document_fields_document_type_id_idx" ON "document_fields"("document_type_id");

-- CreateIndex
CREATE INDEX "document_fields_document_title_id_idx" ON "document_fields"("document_title_id");

-- CreateIndex
CREATE INDEX "document_configurations_document_type_id_idx" ON "document_configurations"("document_type_id");

-- CreateIndex
CREATE INDEX "document_configurations_document_title_id_idx" ON "document_configurations"("document_title_id");

-- CreateIndex
CREATE INDEX "document_configurations_region_id_idx" ON "document_configurations"("region_id");

-- CreateIndex
CREATE UNIQUE INDEX "document_configurations_region_id_document_title_id_key" ON "document_configurations"("region_id", "document_title_id");

-- CreateIndex
CREATE UNIQUE INDEX "regions_code_key" ON "regions"("code");

-- AddForeignKey
ALTER TABLE "document_titles" ADD CONSTRAINT "document_titles_document_type_id_fkey" FOREIGN KEY ("document_type_id") REFERENCES "document_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_fields" ADD CONSTRAINT "document_fields_document_type_id_fkey" FOREIGN KEY ("document_type_id") REFERENCES "document_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_fields" ADD CONSTRAINT "document_fields_document_title_id_fkey" FOREIGN KEY ("document_title_id") REFERENCES "document_titles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_configurations" ADD CONSTRAINT "document_configurations_document_type_id_fkey" FOREIGN KEY ("document_type_id") REFERENCES "document_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_configurations" ADD CONSTRAINT "document_configurations_document_title_id_fkey" FOREIGN KEY ("document_title_id") REFERENCES "document_titles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_configurations" ADD CONSTRAINT "document_configurations_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
